import {Component, OnInit} from 'angular2/core';
import {ControlGroup} from 'angular2/common';
import {FormBuilder} from 'angular2/common';
import {Validators} from 'angular2/common';

import {Student} from '../student/student';
import {StudentService} from '../student/student.service';

import {Router, RouteParams} from 'angular2/router';
import {GlobalVarsService} from '../global-vars.service';




@Component({
    selector: 'login',
    templateUrl:'res/html/login/login.component.html',
    styles:[`
         label{
            display: inline-block;
            width: 140px;
        }
        input {
            width: 250px;
            margin: 10px 10px 0px 50px;
        }
        label{
             margin:10px 10px 0px 50px;
        }
        button{
           margin:10px 10px 0px 50px;
        }
             
    `],
    providers:[StudentService]
    
})
export class LoginComponent {
    
    myForm :ControlGroup;
    public studentIndeks:number;
    public lozinka:string;
    public brojac:number= 100000;
    student:Student = { id:null, ime:"ime",prezime:"prezime", godinaStudija:4, odsek:5,kredit:3, pass:"pass", adresa:"adresa"};
    
    ngOnInit():any{ }
    
    constructor(private _gVS: GlobalVarsService, private _formBuilder: FormBuilder,
            private _router:Router, private _routeParams: RouteParams, 
            private _studentService: StudentService){}
            
    
      
    public check(){
         if (this.student==null){
                console.log('nepostojeci student');
         }else{   
            if (this.student.id == this.studentIndeks && this.student.pass == this.lozinka) {
                this._gVS.setLoggedIn(true);
                console.log(this._gVS.getLoggedIn());
                this._gVS.setStudentOdsek(this.student.odsek);
                this._router.navigate(['Welcome']);
            }else{
                console.log("Ucitao ali async radi svoje, ne treba da sam ovde");
           }
       } 
        
    }
    
    onLogin(){
       
        this._gVS.setStudentId(this.studentIndeks);
        
        
        this._studentService.getStudent().subscribe(
            data =>{this.student = data},
            err =>console.error(err),
             () =>this.check()
            
        );
        
        
        
    }
   
}