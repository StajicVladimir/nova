import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {Student} from './student';

@Component({
    selector: 'welcome',
    template: `
       
        <h3> Dobrodosli na vas glavni ekran :) <br>vasa lozinka je: {{student.pass}}</h3>
        
    `
})
export class WelcomeScreenComponent implements OnInit{
    pass: string;
    student: Student;
    ngOnInit():any{
        //this.pass = this._routeParams.get("pass");
        this.student = {name : 'Neko ime',pass : this._routeParams.get("pass")}//pass = this._routeParams.get("pass");
        this.pass = "aaa";
    }
    constructor(private _router:Router, private _routeParams: RouteParams){}
}