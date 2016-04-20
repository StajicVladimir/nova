import {Injectable} from 'angular2/core';


import {Http, Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {Student} from './student';

@Injectable()
export class StudentService{
    
    constructor (private _http:Http){}
    
  getStudents (){
        
        return this._http.get('http://localhost:8080/RESTfulProject/REST/WebService/Students')
        .map((res:Response) => res.json());
    }
  
}