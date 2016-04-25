import {Component,OnInit} from 'angular2/core';
import {Term} from './term';
import {Router, RouteParams} from 'angular2/router';

import {IspitiRokComponent} from './ispiti-rok.component';


@Component({
    selector:'term-details',
    template: `
        <h2 style="color :#269;">Detalji za {{naziv}} rok od: {{datumPocetka}} do: {{datumZavrsetka}}</h2>
            <button (click) = "onBackToTermList()">Nazad na istorijat rokova</button>
            
                <ispiti-rok [rokId]="id"></ispiti-rok>
            
    `,
    directives:[IspitiRokComponent]
})
export class TermDetailsComponent implements OnInit{
   // public term: Term;
   datumPocetka:string;
   datumZavrsetka:string;
   naziv:string;
   id: number;
   
   //temp:Date;

    constructor(private _router:Router, private _routeParams: RouteParams){}
  
ngOnInit():any{
        //this.pass = this._routeParams.get("pass");
        //this.term = {date : this._routeParams.get("date"),pass : this._routeParams.get("pass")};
        //this.datum = this._routeParams.get("date");
        
       // this.datum = this.datum.substring(0,10);
        //pass = this._routeParams.get("pass");
        this.datumPocetka = this._routeParams.get("datumPocetka");
        this.datumZavrsetka = this._routeParams.get("datumZavrsetka");
        this.id = +this._routeParams.get("id");
        this.naziv = this._routeParams.get("naziv");
    }
    onBackToTermList(){
        this._router.navigate(['Terms']);
    }
}