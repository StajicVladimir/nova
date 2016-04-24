import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import{GlobalVarsService} from './Global-vars.Service';
//import {Student} from './student';
import {StudentDetailsComponent} from './student/student-details.component';

import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {DatumService} from './datum.service';



@Component({
    selector: 'welcome',
    template: `
        
        <!--<button (click) = "onClick()">dugme</button>--> 
        <!-- <ul>
            <li *ngFor = "#datum of datumi">
                {{datum.datum}}
            </li>
        </ul>-->
        <student-details></student-details>
        
    `,
    directives: [StudentDetailsComponent],
    providers:[DatumService]
})
export class WelcomeScreenComponent implements OnInit{
    
   datumi : Date[];
   /*str: string;*/
    da :Date;
    
    
    ngOnInit():any{
            
       // this.getDatume();
      
    }
    
    public getDatume(){
        this._datumService.getDatume().subscribe(
            data => { this.datumi = data},
            err => console.error(err),
            () => console.log('ucitao datume')
         );
    }
    constructor(private _router:Router, private _routeParams: RouteParams, private _http:Http, private _datumService: DatumService){}
    
   
       
}