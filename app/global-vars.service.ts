import {Injectable} from 'angular2/core';

@Injectable()
export class GlobalVarsService{
    loggedIn: boolean;
    
    constructor(){
        this.loggedIn = false;
    }
    
    getLoggedIn(){
        return this.loggedIn;
    }
    
    setLoggedIn(val :boolean){
        this.loggedIn = val;
    }
}