import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';
import {Predmet} from './predmet';
import {PredmetService} from './predmet.service';

import {GlobalVarsService} from '../global-vars.service';

@Component({
    selector: 'proba-prijave',
    template:`
             <ul>
            <li *ngFor = "#predmet of predmeti" (click) = "onPredmetSelected(predmet)">
                <span style="font-weight:bold">{{predmet.naziv}}</span>, profesor: {{predmet.profesor}}
            </li>
        </ul>
    `,
    styles:[`
        ul{
            list-style: none;   
            margin: 16px;
            padding: 0;
        }

        li {
            cursor: pointer;
            transition: padding 0.3s;
        }

        li:hover{
             padding-left: 8px;
             color: #369;
             font-weight: bold;
             border-left: 3px solid #369;
        }
        clicked{
            color: #369;
             font-weight: bold;
        }
        
    `],
    
    providers:[PredmetService]
    
})
export class ProbaPrijaveComponent implements OnInit{
    public predmeti:Predmet[] = [{id: 1, naziv:"ucitavam", profesor: "ucitavam"}];
    @Output() predmetSelected = new EventEmitter();
    @Input('rokId') rokId: number;
    public selectedRok = 6;
      constructor(private _predmetService: PredmetService, private _gVS : GlobalVarsService){}
      
      public getPredmete(){
        
        this._predmetService.getPredmeteZaPrijavu(this._gVS.getStudentOdsek(),this._gVS.getStudentId(),this.rokId).subscribe(
            data => { this.predmeti = data},
            err => console.error(err),
            () => console.log('ucitao predmete')
         );
    }
    onPredmetSelected(predmet){
        this.predmetSelected.emit(predmet.id);
    }
    ngOnInit(){
       
       this.getPredmete();
    }
}