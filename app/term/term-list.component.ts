import {Component, OnInit} from 'angular2/core';
import {Term} from './term';
import {TermService} from './term.service';
import {IspitiRokComponent} from './ispiti-rok.component'

import {Router, RouteParams} from 'angular2/router';

@Component({
    selector: '<term-list>',
    template:`
        <h3>Spisak rokova u kojima ste bili aktivni: </h3>
        <ul>
            <li *ngFor ="#term of terms"
                (click) = "onSelectTerm(term)"
            > 
                {{term.id}}{{term.date}}
            </li>
        </ul>
        
        
        
    `,
    directives:[IspitiRokComponent],
    providers: [TermService]
})
export class TermListComponent implements OnInit{
    public terms:Term[] =[{id: 1, date:"vlada"}];
    private selectedTerm :Term;
    
    constructor(private _router:Router, private _routeParams: RouteParams, private _termService: TermService){}
    
    public getTerms(){
            this._termService.getTerms().subscribe(
            data =>  this.terms = data,
            err => console.error(err),
            () => console.log('done loading Terms')
        );
    }
    
    onSelectTerm(term){
        this.selectedTerm=term;
        this._router.navigate(['TermDetails',{date: this.selectedTerm.date,id:this.selectedTerm.id}]);
    }
    ngOnInit(){
        this.getTerms();
    }
}