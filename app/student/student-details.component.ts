import {Component, OnInit} from 'angular2/core';
import {StudentService} from './student.service';
import {GlobalVarsService} from '../global-vars.service';
import {Student} from './student';

import {ControlGroup} from 'angular2/common';
import {FormBuilder} from 'angular2/common';
import {Validators} from 'angular2/common';

@Component({
    selector: 'student-details',
    templateUrl:'../app/student/student-details.component.html',
    providers: [StudentService]
})

export class StudentDetailsComponent implements OnInit{
    constructor (private _studentService: StudentService, private _gVS: GlobalVarsService){}
   
    trenutniStudent:Student = { id:0, ime:"ime",prezime:"prezime", godinaStudija:0, odsek:0,kredit:0, pass:"",adresa:"ulica"};
    myForm :ControlGroup;
    
    public getStud(){
        this._studentService.getStudent().subscribe(
            data =>{this.trenutniStudent = data},
            err =>console.error(err),
            ()=>console.log('ucitao studente')  
        );
      
    }
   ngOnInit(){
        this.getStud();
   }
}
