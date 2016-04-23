import {Component, OnInit} from 'angular2/core';
import {Term} from './term';
import {TermService} from './term.service';
import {IspitiRokComponent} from './ispiti-rok.component'

import {Router, RouteParams} from 'angular2/router';

@Component({
    selector: 'term-list',
    template:`
        <h3>Spisak rokova u kojima ste bili aktivni: </h3>
        <ul>
            <li *ngFor ="#term of terms"
                (click) = "onSelectTerm(term)"
            > 
                {{term.naziv}}: {{term.datumPocetka}}
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
    directives:[IspitiRokComponent],
    providers: [TermService]
})
export class TermListComponent implements OnInit{
    
    public terms:Term[] =[{id: 1, datumPocetka:"ucitavam", datumZavrsetka:"ucitavam",naziv:"ucitavam"}];
    private selectedTerm :Term;
    
    constructor(private _router:Router, private _routeParams: RouteParams, private _termService: TermService){}
    
    public getTerms(){
            this._termService.getTerms().subscribe(
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