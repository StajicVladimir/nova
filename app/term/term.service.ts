import {Injectable} from 'angular2/core';
import {Term} from './term';
import {TERMS} from './mock-terms';

import {Http, Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class TermService{
    
    constructor (private _http:Http){}
    
    getTerms (){
        //return Promise.resolve(TERMS);
         return this._http.get('http://localhost:8080/RESTfulProject/REST/WebService/GetTerms').map((res:Response) => res.json());
    }
}