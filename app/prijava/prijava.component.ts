import {Component, OnInit} from 'angular2/core';
import {ControlGroup} from 'angular2/common';
import {FormBuilder} from 'angular2/common';
import {Validators} from 'angular2/common';

import {Student} from '../student/student';
import {StudentService} from '../student/student.service';

import {Term} from '../term/term';
import {TermService} from '../term/term.service';



import {PredmetListComponent} from '../predmet/predmet-list.component';

@Component({
    selector:'prijava-component',
    
    templateUrl :'../app/prijava/prijava-component.html',
    
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
    providers: [StudentService,TermService],
    directives:[PredmetListComponent]
    
})
export class PrijavaComponent implements OnInit{
    myForm :ControlGroup;
    trenutniStudent:Student = { id:2, ime:"dfds",prezime:"heeeeee", godinaStudija:4, odsek:5,kredit:3,pass:"vlada"};
    public terms:Term[] =[{id: 1, date:"vlada"}];
    
    constructor(private _formBuilder: FormBuilder, private _studentService: StudentService,
                    private _termService: TermService){}
    
    public getStud(){
        this._studentService.getStudent().subscribe(
            data =>{this.trenutniStudent = data},
            err =>console.error(err),
            ()=>console.log('done loading students')  
        );
      }
      
      public getFutureTerms(){
         
            this._termService.getFutureTerms().subscribe(
            data =>  this.terms = data,
            err => console.error(err),
            () => console.log('done loading Terms')
        );
    
      }
      
      ngOnInit(){
          this.getStud();
          this.getFutureTerms();
      }
}