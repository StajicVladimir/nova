import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {Student} from './student';
import {StudentDetailsComponent} from './student/student-details.component';

@Component({
    selector: 'welcome',
    template: `
       
        <div><h3> Welcome !!! :) <br>vasa lozinka je:</h3>
        {{broj}}</div>
        <student-details></student-details>
    `,
    directives: [StudentDetailsComponent]
})
export class WelcomeScreenComponent implements OnInit{
   
    
    
   // student: Student;
    ngOnInit():any{
        //this.pass = this._routeParams.get("pass");
        //this.student = {name : this._routeParams.get("name"),pass : this._routeParams.get("pass")}//pass = this._routeParams.get("pass");
        
    }
    constructor(private _router:Router, private _routeParams: RouteParams){}
}

