import {Component, OnInit} from 'angular2/core';
import {ControlGroup} from 'angular2/common';
import {FormBuilder} from 'angular2/common';
import {Validators} from 'angular2/common';

import {Student} from './student/student';
import {StudentService} from './student/student.service';

import {Router, RouteParams} from 'angular2/router';
import {GlobalVarsService} from './global-vars.service';




@Component({
    selector: 'login',
    templateUrl:'./app/login.component.html',
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
   
    student:Student = { id:2, ime:"ime",prezime:"prezime", godinaStudija:4, odsek:5,kredit:3, pass:"pass", adresa:"adresa"};
    
    ngOnInit():any{ }
    
    constructor(private _gVS: GlobalVarsService, private _formBuilder: FormBuilder,
            private _router:Router, private _routeParams: RouteParams, 
            private _studentService: StudentService){}
            
    public getStud(){
        this._studentService.getStudent().subscribe(
            data =>{this.student = data},
            err =>console.error(err),
            ()=>console.log('done loading students')  
        );
      }
      
    
    
    onLogin(){
       
        this._gVS.setStudentId(this.studentIndeks);
        this.getStud();
        
        
        if (this.student.id == this.studentIndeks && this.student.pass == this.lozinka) {
            
            this._gVS.setLoggedIn(true);
            this._gVS.setStudentOdsek(this.student.odsek);
            this._router.navigate(['Welcome',{name: this.studentIndeks, pass: this.lozinka}]);
        }else{
            console.log("evo me ovde a ne treba da budem tu")
            this._router.navigate(['Login']);
            
        }
    }
   
}