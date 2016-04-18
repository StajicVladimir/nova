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
    
    ngOnInit():any{
       //this.newContact = {firstName: '',lastName: this._routeParams.get('lastName'), phone:'', email: ''};
      /* this.myForm = this._formBuilder.group({
           'name' : [this.student.name,Validators.required],
           'pass': ['',Validators.required],
           
       })*/
      
    }
    
    constructor(private _gVS: GlobalVarsService, private _formBuilder: FormBuilder,
            private _router:Router, private _routeParams: RouteParams){}
   
   onLogin(){
       this._gVS.setLoggedIn(true);
       this._router.navigate(['Welcome',{name: this.student.name, pass: this.student.pass}]);
      // this._globals.setLoggedIn(true);
      
   }
   onSubmit(){}
}

/*
 input{
            
            
            border: solid 1px #dcdcdc;
             transition: box-shadow 0.3s, border 0.3s;
            -webkit-border-radius: 15px;
             -moz-border-radius: 15px;
             border-radius: 15px;
             margin-top: 15 px;
        }
        .style-1 input[type="text"]:focus,
        .style-1 input[type="text"].focus {
            border: solid 1px #707070;
            box-shadow: 0 0 5px 1px #969696;
        }  */