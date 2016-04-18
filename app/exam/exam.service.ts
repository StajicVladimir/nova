import {Injectable} from 'angular2/core';
import {Exam} from './exam';

import {Http, Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ExamService{
    
    constructor (private _http:Http){}
    getExams (){
        //return Promise.resolve(EXAMS);
        return this._http.get('http://localhost:8080/RESTfulProject/REST/WebService/GetFeeds').map((res:Response) => res.json());
    }
}