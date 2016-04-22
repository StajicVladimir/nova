import {Component, OnInit} from 'angular2/core';
import {StudentService} from './student.service';
import {GlobalVarsService} from '../global-vars.service';
import {Student} from './student';

@Component({
    selector: 'student-details',
    template: `
           <h2> Dobrodošli u vaš nalog</h2>
           Vaši podatci: <br> 
           Ime i prezime: {{trenutniStudent.ime}} {{trenutniStudent.prezime}}<br>
           Na odseku: {{trenutniStudent.odsek}}<br>
           Adresa: {{trenutniStudent.adresa}}<br>
           Godina: {{trenutniStudent.godinaStudija}}<br>
           Uplaceno: {{trenutniStudent.kredit}}rsd <br>
           
           <button>Izmena ličnih podataka</button>
     `,
    providers: [StudentService]
})

export class StudentDetailsComponent implements OnInit{
    constructor (private _studentService: StudentService, private _gVS: GlobalVarsService){}
   
    trenutniStudent:Student = { id:0, ime:"ime",prezime:"prezime", godinaStudija:0, odsek:0,kredit:0, pass:"",adresa:"ulica"};
    
    
    public getStud(){
        this._studentService.getStudent().subscribe(
            data =>{this.trenutniStudent = data},
            err =>console.error(err),
            ()=>console.log('ucitao studente')  
        );
      
    }
   
   
    
    ngOnInit(){
        this.getStud();
        //this.jedan = this.students.pop();
        //this.duzina = this.students.length;
        //this.jedan = this.students[3];
    }
}
