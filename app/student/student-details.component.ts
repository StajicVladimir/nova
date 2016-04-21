import {Component, OnInit} from 'angular2/core';
import {StudentService} from './student.service';
import {GlobalVarsService} from '../global-vars.service';
import {Student} from './student';

@Component({
    selector: 'student-details',
    template: `
            
            <h3>Hello From student details </h3>
            
           Ime i prezime: {{trenutniStudent.ime}} {{trenutniStudent.prezime}}<br>
           Na odseku: {{trenutniStudent.odsek}}<br>
           Godina: {{trenutniStudent.godinaStudija}}<br>
           Uplaceno: {{trenutniStudent.kredit}}rsd
           
           
           
                
    `,
    providers: [StudentService]
})

export class StudentDetailsComponent implements OnInit{
    constructor (private _studentService: StudentService, private _gVS: GlobalVarsService){}
   
    trenutniStudent:Student = { id:2, ime:"dfds",prezime:"heeeeee", godinaStudija:4, odsek:5,kredit:3};
    
    
    public getStud(){
        this._studentService.getStudent().subscribe(
            data =>{this.trenutniStudent = data},
            err =>console.error(err),
            ()=>console.log('done loading students')  
        );
      
    }
   
   
    
    ngOnInit(){
        this.getStud();
        //this.jedan = this.students.pop();
        //this.duzina = this.students.length;
        //this.jedan = this.students[3];
    }
}
