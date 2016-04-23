import {Injectable} from 'angular2/core';
import {Student} from './student/student';

@Injectable()
export class GlobalVarsService{
    loggedIn: boolean;
    studentId: number;
    
    ulogovaniStudent: Student;
    
    constructor(){
        this.loggedIn = false;
        this.ulogovaniStudent = { id:0, ime:"ime",prezime:"prezime", godinaStudija:0, odsek:3,kredit:0, pass:"",adresa:"ulica"};
    }
    
    getLoggedIn(){
        return this.loggedIn;
    }
    
    setLoggedIn(val :boolean){
        this.loggedIn = val;
    }
    
    getStudentId(){
        return this.studentId;
    }
    setStudentId(id :number){
        this.studentId = id;
    }
    getStudentOdsek(){
        return this.ulogovaniStudent.odsek;
    }
    setStudentOdsek(odsek:number){
        this.ulogovaniStudent.odsek = odsek;
    }
}