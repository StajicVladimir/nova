import {Injectable} from 'angular2/core';



import {Http, Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class DatumService{
    private urlPath='http://localhost:8080/RESTfulProject/REST/WebService/datumi';
    constructor (private _http:Http){}
    
    getDatume (){
         return this._http.get(this.urlPath)
                    .map((res:Response) => res.json());
    }
    
   
}