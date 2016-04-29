import {Injectable} from 'angular2/core';
import {Predmet} from './predmet';


import {Http, Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
//import {GlobalVarsService} from '../global-vars.service';

@Injectable()
export class PredmetService{
    private urlPath='http://ec2-52-28-138-105.eu-central-1.compute.amazonaws.com:8080/RESTfulProject/REST/WebService/predmeti';
    constructor (private _http:Http){}
    
    getPredmete (){
        
        
         return this._http.get(this.urlPath)
                    .map((res:Response) => res.json());
                    
    }
    getPredmet(predmetId:number){
        return this._http.get(this.urlPath+'/'+predmetId)
                    .map((res:Response) => res.json());
    }
    getPredmeteSaOdseka(odsekId:number){
        return this._http.get(this.urlPath+'/odsek/'+odsekId)
                    .map((res:Response) => res.json());
    }
}