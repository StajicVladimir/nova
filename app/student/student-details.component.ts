import {Component, OnInit} from 'angular2/core';
import {StudentService} from './student.service';
import {GlobalVarsService} from '../global-vars.service';
import {Student} from './student';

import {Odsek} from '../odsek/odsek';
import {OdsekService} from '../odsek/odsek.service'

import {ControlGroup} from 'angular2/common';
import {FormBuilder} from 'angular2/common';
import {Validators} from 'angular2/common';

@Component({
    selector: 'student-details',
    templateUrl:'../app/student/student-details.component.html',
    providers: [StudentService, OdsekService]
})

export class StudentDetailsComponent implements OnInit{
    
    public changeDataHidden:boolean = false;
    trenutniStudent:Student = { id:0, ime:"ime",prezime:"prezime", godinaStudija:0, odsek:0,kredit:0, pass:"",adresa:"ulica"};
    odsek:Odsek = {id:0,naziv:"ucitavam"};
    
    myForm :ControlGroup;
    ime:string;
    poruka:string;
    
    constructor (private _studentService: StudentService, private _gVS: GlobalVarsService,
                 private _odsekService: OdsekService){}
    
    public getStud(){
        this._studentService.getStudent().subscribe(
            data =>{this.trenutniStudent = data},
            err =>console.error(err),
            ()=>console.log('ucitao studente')  
        );
    }
    public getOdsek(){
        this._odsekService.getOdsek(this._gVS.getStudentOdsek()).subscribe(
            data =>{this.odsek = data},
            err =>console.error(err),
            ()=>console.log('ucitao odsek')  
        );
    }
   ngOnInit(){
        this.getStud();
        this.changeDataHidden = true
        this.getOdsek();
   }
   
   onChangeData(){
       this.changeDataHidden=false;
   }
   onPromeni(ime, prezime, adresa){
       
       this._studentService.postStudent(this.trenutniStudent.ime, 
                    this.trenutniStudent.prezime, this.trenutniStudent.adresa).subscribe(
            data =>  this.ime = data,
            err => console.error(err),
            () => console.log('Uneo novog studenta')
            ); 
            this.changeDataHidden = true;
            this.poruka="Uspešno ste promenili vaše podatke!!";
   }
}
