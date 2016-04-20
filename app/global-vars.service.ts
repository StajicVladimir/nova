import {Injectable} from 'angular2/core';

@Injectable()
export class GlobalVarsService{
    loggedIn: boolean;
    studentId: number;
    
    constructor(){
        this.loggedIn = false;
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
}