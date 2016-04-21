import {Injectable} from 'angular2/core';
import {Term} from './term';


import {Http, Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {GlobalVarsService} from '../global-vars.service';

@Injectable()
export class TermService{
    private urlPath='http://localhost:8080/RESTfulProject/REST/WebService/Rokovi/';
    constructor (private _http:Http, private _gVS:GlobalVarsService){}
    
    getTerms (){
        
        this.urlPath = this.urlPath + this._gVS.getStudentId().toString();
         return this._http.get(this.urlPath)
                    .map((res:Response) => res.json());
    }
    getFutureTerms(){
        
         return this._http.get('http://localhost:8080/RESTfulProject/REST/WebService/BuduciRokovi/')
                    .map((res:Response) => res.json());
    }
}