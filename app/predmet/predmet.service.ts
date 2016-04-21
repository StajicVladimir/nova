import {Injectable} from 'angular2/core';
import {Predmet} from './predmet';


import {Http, Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
//import {GlobalVarsService} from '../global-vars.service';

@Injectable()
export class PredmetService{
    private urlPath='http://localhost:8080/RESTfulProject/REST/WebService/SviPredmeti';
    constructor (private _http:Http){}
    
    getPredmete (){
        
        
         return this._http.get(this.urlPath)
                    .map((res:Response) => res.json());
    }
}