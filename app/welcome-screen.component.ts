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
    
    ime:string='vlada';
    
   urlString :string = 'http://localhost:8080/RESTfulProject/REST/WebService/Students/';
   // student: Student;
    ngOnInit():any{
        //this.pass = this._routeParams.get("pass");
        //this.student = {name : this._routeParams.get("name"),pass : this._routeParams.get("pass")}//pass = this._routeParams.get("pass");
        
    }
    constructor(private _router:Router, private _routeParams: RouteParams, private _http:Http){}
    
    /* public getTerms(){
           this.ime="aaaaaaaaaaaaaaa";
       let body = "id=9807&ime=vlada&prezime=heellooo&adresa=adresa";
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('http://localhost:8080/RESTfulProject/REST/WebService/Students/', body, options)
                    .map((res:Response) => res.json());
    }
    
    onClick(){
      
     this.getTerms().subscribe(
            data =>  this.ime = data,
            err => console.error(err),
            () => console.log('done loading Terms')
            );          
     }  */
       
}

