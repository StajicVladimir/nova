import {Component, OnInit} from 'angular2/core';
import {PredmetService} from './predmet.service';
import {Predmet} from './predmet';

@Component({
    selector: 'predmet-list',
    template:`
        <h2>Hello from liste predmeta</h2>
        <ul>
            <li *ngFor = "#predmet of predmeti">
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
    
    constructor(private _predmetService: PredmetService){}
    
      public getPredmete(){
       
        this._predmetService.getPredmete().subscribe(

      data => { this.predmeti = data},
      
      err => console.error(err),
      
      () => console.log('ucitao predmete')
    );
    }
    ngOnInit(){
        this.getPredmete();
    }
}