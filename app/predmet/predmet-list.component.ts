import {Component, OnInit, Output, EventEmitter} from 'angular2/core';
import {PredmetService} from './predmet.service';
import {Predmet} from './predmet';

import {GlobalVarsService} from '../global-vars.service'



@Component({
    selector: 'predmet-list',
    template:`
        <h3>Spisak predmeta dostupnih za prijavu:</h3>
        
        <ul>
            <li *ngFor = "#predmet of predmeti" (click) = "onPredmetSelected(predmet)">
                {{predmet.naziv}} profesor: {{predmet.profesor}}
            </li>
        </ul>
    `,
    styles:[`
        ul{
            list-style: none;
            margin: 16px;
            padding: 0;
        }

        li{
            cursor: pointer;
            transition: padding 0.3s;
        }

        li:hover{
             padding-left: 8px;
             color: #369;
             font-weight: bold;
             border-left: 3px solid #369;
        }
        .clicked{
            color: #369;
             font-weight: bold;
        }
    `],
    
    providers:[PredmetService]
})
export class PredmetListComponent{
    public predmeti:Predmet[] = [{id: 1, naziv:"ucitavam", profesor: "ucitavam"}];
    @Output() predmetSelected = new EventEmitter();
    
    
    constructor(private _predmetService: PredmetService, private _gVS : GlobalVarsService){}
      
      /*public getStudent(){
        this._studentService.getStudent().subscribe(
            data =>{this.trenutniStudent = data},
            err =>console.error(err),
            ()=>console.log('ucitao studente')  
        );
    }*/
    onPredmetSelected (predmet){
        this.predmetSelected.emit(predmet.id);
    }
      public getPredmete(){
        this._predmetService.getPredmeteSaOdseka(this._gVS.getStudentOdsek()).subscribe(
            data => { this.predmeti = data},
            err => console.error(err),
            () => console.log('ucitao predmete')
         );
    }
    
    ngOnInit(){
       
       this.getPredmete();
    }
}