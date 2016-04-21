import {Injectable} from 'angular2/core';


import {Http, Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {Student} from './student';
import {GlobalVarsService} from '../global-vars.service';

@Injectable()
export class StudentService{
    urlString :string = 'http://localhost:8080/RESTfulProject/REST/WebService/Students/';//PAZI NA POSLEDNJI /!!!!!
    constructor (private _http:Http,private _gVS : GlobalVarsService){}
    
  getStudent(){
        
        this.urlString = this.urlString + this._gVS.getStudentId().toString();
        
        return this._http.get(this.urlString)
        .map((res:Response) => res.json());
    }
   
}