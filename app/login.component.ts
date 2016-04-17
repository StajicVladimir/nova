import {Component, OnInit} from 'angular2/core';
import {ControlGroup} from 'angular2/common';
import {FormBuilder} from 'angular2/common';
import {Validators} from 'angular2/common';
import {Student} from './student';
import {Router, RouteParams} from 'angular2/router';



@Component({
    selector: 'login',
    template: `
        <form #myForm = "ngForm" (ngSubmit) = "onSubmit()" >
            <div>
                <label for = "user">Username: </label>
                <input type="text" id="user" 
                ngControl="user" [(ngModel)]="student.name "
                required>
            </div>
            <div>
                <label for = "password">Password: </label>
                <input type="password" id="password" 
                   ngControl="pass" [(ngModel)]="student.pass"
                   required >
                {{student.pass}}
            </div>
            <div>
                <button (click) = "onLogin()" [disabled] = "!myForm.valid">login</button>
            </div>
        </form>
            
    `,
    styles:[`
         label{
            display: inline-block;
            width: 140px;
        }
        input{
            width: 250px;
        }
    `]
})
export class LoginComponent {
    myForm :ControlGroup;
    student: Student = {name: "", pass:""};
    ngOnInit():any{
       //this.newContact = {firstName: '',lastName: this._routeParams.get('lastName'), phone:'', email: ''};
      /* this.myForm = this._formBuilder.group({
           'name' : [this.student.name,Validators.required],
           'pass': ['',Validators.required],
           
       })*/
    }
    
    constructor(private _formBuilder: FormBuilder,private _router:Router, private _routeParams: RouteParams){}
   // ngOnOinit(){}
   onLogin(){
       this._router.navigate(['Welcome',{pass: this.student.pass}]);
   }
}