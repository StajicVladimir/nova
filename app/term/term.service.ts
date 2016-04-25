import {Injectable} from 'angular2/core';
import {Term} from './term';


import {Http, Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {GlobalVarsService} from '../global-vars.service';

@Injectable()
export class TermService{
    private urlPath='http://localhost:8080/RESTfulProject/REST/WebService/rokovi/';
    constructor (private _http:Http, private _gVS:GlobalVarsService){}
    
    getTerms (){
        
        this.urlPath = this.urlPath + 'student/'+this._gVS.getStudentId().toString();
         return this._http.get(this.urlPath)
                    .map((res:Response) => res.json());
    }
    getTerm (termId:number){
        
    }
    getFutureTerms(){
        
         return this._http.get('http://localhost:8080/RESTfulProject/REST/WebService/buducirokovi/')
                    .map((res:Response) => res.json());
    }
}