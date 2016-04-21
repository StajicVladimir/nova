import {Component,OnInit} from 'angular2/core';
import {Term} from './term';
import {Router, RouteParams} from 'angular2/router';
import {ExamListComponent} from '../exam/exam-list.component';
import {IspitiRokComponent} from './ispiti-rok.component';


@Component({
    selector:'term-details',
    template: `
        <h3>Detalji za rok od: {{datum}}</h3> 
        <button (click) = "onBackToTermList()">Back to terms</button>
            <ispiti-rok [rokId]="id"></ispiti-rok>
        
    `,
    directives:[IspitiRokComponent]
})
export class TermDetailsComponent implements OnInit{
   // public term: Term;
   datum:string;
   id: number;
   
   //temp:Date;

    constructor(private _router:Router, private _routeParams: RouteParams){}
  
ngOnInit():any{
        //this.pass = this._routeParams.get("pass");
        //this.term = {date : this._routeParams.get("date"),pass : this._routeParams.get("pass")};
        //this.datum = this._routeParams.get("date");
        
       // this.datum = this.datum.substring(0,10);
        //pass = this._routeParams.get("pass");
        this.datum = this._routeParams.get("date");
        this.id = +this._routeParams.get("id");
        
    }
    onBackToTermList(){
        this._router.navigate(['Terms']);
    }
}