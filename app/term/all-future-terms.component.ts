import {Component,OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {Term} from './term';
import {TermService} from './term.service';
import {FutureTermsDetailsComponent} from './future-terms-details.component';

import {ProbaPrijaveComponent} from '../predmet/proba-prijave.component';
@Component({
    selector:'all-future-terms',
    templateUrl:'res/html/term/all-future-terms.component.html',
    styleUrls:['res/css/term.css'],
    providers:[TermService],
    directives:[ProbaPrijaveComponent]
})

export class AllFutureTermsComponent{
     public terms:Term[] =[{id: 1, datumPocetka:null, datumZavrsetka:null,naziv:"ucitavam"}];
        public trenutniRokId = 0;
        public trenutniRokNaziv ="";
        public trenutniRokPocetak:string ="";
        public trenutniRokZavrsetak:string ="";
        public termNotSelected:boolean = true;
        
    constructor(private _router:Router, private _routeParams: RouteParams, private _termService: TermService){}
    
    public getTerms(){
            this._termService.getAllFutureTerms().subscribe(
            data =>  this.terms = data,
            err => console.error(err),
            () => console.log('Ucitao Rokove')
        );
    }
    
    onTermSelected(term){
        this.trenutniRokId = term.id;
        this.trenutniRokNaziv = term.naziv;
        this.trenutniRokPocetak = term.datumPocetka;
        this.trenutniRokZavrsetak = term.datumZavrsetka;
        this.termNotSelected = false;
    }
    
    goToPrijava(){
        this._router.navigate(['Prijava', { rokId: this.trenutniRokId, rokNaziv:  this.trenutniRokNaziv,
                rokPocetak: this.trenutniRokPocetak, rokZavrsetak: this.trenutniRokZavrsetak }])
    }
    ngOnInit(){
        this.getTerms();
        this.termNotSelected=true;
    }
}