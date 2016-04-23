import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import{GlobalVarsService} from './Global-vars.Service';
//import {Student} from './student';
import {StudentDetailsComponent} from './student/student-details.component';

import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Rx';


@Component({
    selector: 'welcome',
    template: `
        
        <!--<button (click) = "onClick()">dugme</button>--> 
       
        <student-details></student-details>
        
    `,
    directives: [StudentDetailsComponent]
})
export class WelcomeScreenComponent implements OnInit{
    
   
    ngOnInit():any{
        
        
    }
    constructor(private _router:Router, private _routeParams: RouteParams, private _http:Http){}
    
   
       
}