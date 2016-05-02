import {Component,OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {Term} from './term';
import {TermService} from './term.service';
import {FutureTermsDetailsComponent} from './future-terms-details.component';

@Component({
    selector:'future-terms',
    templateUrl:'res/html/term/future-terms.component.html',
    styleUrls:['res/css/term.css'],
    providers:[TermService]
})

export class FutureTermsComponent{
     public terms:Term[] =[{id: 1, datumPocetka:null, datumZavrsetka:null,naziv:"ucitavam"}];
    private selectedTerm :Term;
    
    constructor(private _router:Router, private _routeParams: RouteParams, private _termService: TermService){}
    
    public getTerms(){
            this._termService.getAllFutureTerms().subscribe(
            data =>  this.terms = data,
            err => console.error(err),
            () => console.log('Ucitao Rokove')
        );
    }
    
    onSelectTerm(term){
        this.selectedTerm=term;
        this._router.navigate(['FutureTermsDetails',{datumPocetka: this.selectedTerm.datumPocetka,
                                              datumZavrsetka: this.selectedTerm.datumZavrsetka,
                                              id:this.selectedTerm.id,
                                              naziv:this.selectedTerm.naziv}]);
    }
    ngOnInit(){
        this.getTerms();
    }
}