import {Component,OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {Term} from './term';
import {TermService} from './term.service';
import {FutureTermsDetailsComponent} from './future-terms-details.component';

@Component({
    selector:'all-future-terms',
    template:`
        <h2 style="color :#269;">Spisak narednih rokova: </h2>
        <div style= "width: 80%; height: 80%;">
        <ul >
            <li *ngFor ="#term of terms"> 
                <span style = "font-weight:bold">{{term.naziv | uppercase}}: </span> 
                {{term.datumPocetka}} {{term.datumZavrsetka}}
            </li>
        </ul>
        </div>
    `,
    styleUrls:['res/css/term.css'],
    providers:[TermService]
})

export class AllFutureTermsComponent{
     public terms:Term[] =[{id: 1, datumPocetka:null, datumZavrsetka:null,naziv:"ucitavam"}];
    
    
    constructor(private _router:Router, private _routeParams: RouteParams, private _termService: TermService){}
    
    public getTerms(){
            this._termService.getAllFutureTerms().subscribe(
            data =>  this.terms = data,
            err => console.error(err),
            () => console.log('Ucitao Rokove')
        );
    }
    
    
    ngOnInit(){
        this.getTerms();
    }
}