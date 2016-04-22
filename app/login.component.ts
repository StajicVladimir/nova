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
    template: `
        <form #myForm = "ngForm">
            <br>
            <div class="form-group">
                <label for = "user">Username: </label>
                <input class="form-control" type="text" id="user" 
                ngControl="user" [(ngModel)]="studentIndeks" #user = "ngForm"
                
                required>
                {{studentIndeks}}
                <div style="width : 250px; margin:10px 10px 0px 50px; " [hidden]="user.valid" class="alert alert-danger">
                 Name is required
             </div>
            </div>
             
            
            <div >
                <label for = "password">Password: </label>
                <input class="form-control" type="password" id="password" 
                   ngControl="pass" [(ngModel)]="lozinka" #pass = "ngForm"
                   
                   required >
               <!-- {{student.pass}} -->
                <div style="width : 250px; margin:10px 10px 0px 50px; " [hidden]="pass.valid" class="alert alert-danger">
                 Password is required
             </div>
            </div>
            sfdsfdsfds
            <br>
            <div>
                <button (click) = "onLogin()" [disabled] = "!myForm.valid" >login</button>
            </div>
            
        </form>
            
    `,
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
    //public lozinka: string;
    //public user: number;
    student:Student = { id:2, ime:"ime",prezime:"prezime", godinaStudija:4, odsek:5,kredit:3, pass:"pass", adresa:"adresa"};
    //private id: number;
    ngOnInit():any{
       
      
    }
    
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
      
    checkLogin(){
        if (this.student.id == this.studentIndeks && this.student.pass == this.lozinka) {
           this._gVS.setLoggedIn(true);
       //this.student.id = +this.student.name;
       
       this._router.navigate(['Welcome',{name: this.studentIndeks, pass: this.lozinka}]);
      // this._globals.setLoggedIn(true);
       }else{
           this._router.navigate(['Login']);
       }
    }
   onLogin(){
       
       this._gVS.setStudentId(this.studentIndeks);
       
       this.getStud();
       this.checkLogin();
       
       
      
   }
   onSubmit(){}
}
