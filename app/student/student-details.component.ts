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
       //this.students[1].ime= "noooooo";
       //this.duzina = this.students.length;
      /* this.jedan = {id:this.students[0].id, ime:this.students[0].ime,
                        prezime: this.students[0].prezime, godinaStudija: this.students[0].godinaStudija,
                        odsek: this.students[0].odsek, kredit: this.students[0].kredit};*/
    }
   
   
    
    ngOnInit(){
        this.getStud();
        //this.jedan = this.students.pop();
        //this.duzina = this.students.length;
        //this.jedan = this.students[3];
    }
}
