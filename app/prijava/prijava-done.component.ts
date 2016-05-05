import {Component, Input, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

@Component({
    selector:'prijava-done',
    template:`
        <h2>Ispit uspešno prijavljen</h2>
        <div>
            <span style="font-weight:bold">Prijavili ste ispit: </span>
            <span>{{ispit}}</span>
        </div>
        <div>
            <span style="font-weight:bold">U roku: </span>
            <span>{{rok}}</span>
        </div>
        
        kredit je umanjen za 150rsd i sada iznosi <span style="font-weight: bold">{{kredit}}</span>
    `,
})

export class PrijavaDoneComponent implements OnInit{
    @Input('ispit') ispit: string;
    @Input('rok') rok: string;
     @Input('kredit') kredit: string;
    
    constructor(private _router:Router, private _routeParams: RouteParams){}
    ngOnInit(){
        
        
    }
}