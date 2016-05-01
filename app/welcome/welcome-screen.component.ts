import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import{GlobalVarsService} from '../Global-vars.Service';
import {Student} from '../student/student';
import {StudentService} from '../student/student.service';
import {StudentDetailsComponent} from '../student/student-details.component';

import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
//import {DatumService} from '../datum.service';



@Component({
    selector: 'welcome',
    template: `
                <student-details></student-details>
        `,
    directives: [StudentDetailsComponent],
    providers:[StudentService]
})
export class WelcomeScreenComponent {
    
    
    
    
}