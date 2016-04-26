import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import{GlobalVarsService} from '../Global-vars.Service';
//import {Student} from './student';
import {StudentDetailsComponent} from '../student/student-details.component';

import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {DatumService} from '../datum.service';



@Component({
    selector: 'welcome',
    template: `
                <student-details></student-details>
        `,
    directives: [StudentDetailsComponent],
    providers:[DatumService]
})
export class WelcomeScreenComponent implements OnInit{
    
    ngOnInit():any{}
    
    
    constructor(private _router:Router, private _routeParams: RouteParams,
                private _http:Http, private _datumService: DatumService){}
    
}