import {Component, OnInit} from 'angular2/core';
import {Term} from './term';
import {TermService} from './term.service';
//import {IspitiRokComponent} from './ispiti-rok.component'

import {Router, RouteParams} from 'angular2/router';

@Component({
    selector: 'term-list',
    templateUrl:'res/html/term/term-list.component.html',
    styleUrls:['res/css/term.css'],
    //directives:[IspitiRokComponent],
    providers: [TermService]
})
export class TermListComponent implements OnInit{
    
    public terms:Term[] =[{id: 1, datumPocetka:null, datumZavrsetka:null,naziv:"ucitavam"}];
    private selectedTerm :Term={id: 1, datumPocetka:null, datumZavrsetka:null,naziv:"ucitavam"};
    
    constructor(private _router:Router, private _routeParams: RouteParams, private _termService: TermService){}
    
    public getTerms(){
            this._termService.getPastTerms().subscribe(
            data =>  this.terms = data,
            err => console.error(err),
            () => console.log('Ucitao Rokove')
        );
    }
    
    onSelectTerm(term){
        this.selectedTerm=term;
        this._router.navigate(['TermDetails',{datumPocetka: this.selectedTerm.datumPocetka,
                                              datumZavrsetka: this.selectedTerm.datumZavrsetka,
                                              id:this.selectedTerm.id,
                                              naziv:this.selectedTerm.naziv}]);
    }
    ngOnInit(){
        this.getTerms();
    }
}