import {Injectable} from 'angular2/core';


import {Http, Response, Headers,RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {Student} from './student';
import {GlobalVarsService} from '../global-vars.service';

@Injectable()
export class StudentService{
    urlString :string = 'http://localhost:8080/RESTfulProject/REST/WebService/Students/';//PAZI NA POSLEDNJI /!!!!!
    constructor (private _http:Http,private _gVS : GlobalVarsService){}
    headers:Headers;
  getStudent(){
        
        this.urlString = this.urlString + this._gVS.getStudentId().toString();
        
        return this._http.get(this.urlString)
        .map((res:Response) => res.json());
    }
  /* postStudent(ime:string, prezime:string,adresa:string){
        this.urlString = this.urlString+this._gVS.getStudentId().toString()+'/';
        this.headers.append('Content-Type', 'application/json');
        this._http.post(this.urlString,JSON.stringify({ime:"nja",prezime:"njanjic", adresa:"njanjava"}),{headers:this.headers})
        .map((res:Response) => res.json());
    }*/
    postStudent(ime:string, prezime:string, adresa:string){
        let body = "id="+this._gVS.getStudentId().toString()+"&ime="+ime+"&prezime="+prezime+"&adresa="+adresa;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this.urlString, body, options)
                    .map((res:Response) => res.json());
    }
   
}