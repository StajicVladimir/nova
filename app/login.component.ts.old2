import {Component, OnInit} from 'angular2/core';
import {ControlGroup} from 'angular2/common';
import {FormBuilder} from 'angular2/common';
import {Validators} from 'angular2/common';

import {Student} from './student';

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
                ngControl="user" [(ngModel)]="student.name " #user = "ngForm"
                
                required>
                <!--{{student.name}}-->
                <div style="width : 250px; margin:10px 10px 0px 50px; " [hidden]="user.valid" class="alert alert-danger">
                 Name is required
             </div>
            </div>
             
            
            <div >
                <label for = "password">Password: </label>
                <input class="form-control" type="password" id="password" 
                   ngControl="pass" [(ngModel)]="student.pass" #pass = "ngForm"
                   
                   required >
               <!-- {{student.pass}} -->
                <div style="width : 250px; margin:10px 10px 0px 50px; " [hidden]="pass.valid" class="alert alert-danger">
                 Password is required
             </div>
            </div>
            
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
             
    `]
    
})
export class LoginComponent {
    myForm :ControlGroup;
    student: Student = {name: "", pass:""};
    private id: number;
    ngOnInit():any{
       
      
    }
    
    constructor(private _gVS: GlobalVarsService, private _formBuilder: FormBuilder,
            private _router:Router, private _routeParams: RouteParams){}
   
   onLogin(){
       this._gVS.setLoggedIn(true);
       this.id = +this.student.name;
       this._gVS.setStudentId(this.id);
       this._router.navigate(['Welcome',{name: this.student.name, pass: this.student.pass}]);
      // this._globals.setLoggedIn(true);
      
   }
   onSubmit(){}
}
