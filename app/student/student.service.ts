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
        //let url = this.urlString + this._gVS.getStudentId().toString();
        return this._http.get(this.urlString)
        .map((res:Response) => res.json());
    }
    
    getStudentId(id:number){
        this.urlString = this.urlString + id.toString();
        //let url = this.urlString + this._gVS.getStudentId().toString();
        return this._http.get(this.urlString)
        .map((res:Response) => res.json());
    }
    postStudent(ime:string, prezime:string, adresa:string, kredit:number, lozinka:string){
        let body = "id="+this._gVS.getStudentId().toString()+"&ime="+ime+"&prezime="
                    +prezime+"&adresa="+adresa+"&kredit="+kredit+"&lozinka="+lozinka;
                  //let body = "id=9807&ime=ajsad&prezime=heellooo&adresa=adresa";*/
                  let  id = this._gVS.getStudentId().toString();
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' });
        //let body = JSON.stringify({id,ime,prezime,adresa,kredit,lozinka});
        let options = new RequestOptions({ headers: headers });
        console.log(body);
        return this._http.post('http://localhost:8080/RESTfulProject/REST/WebService/Students/', body, options)
                    .map((res:Response) => res.json());
    }
   
}