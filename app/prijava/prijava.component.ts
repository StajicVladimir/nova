import {Component, OnInit} from 'angular2/core';
import {ControlGroup} from 'angular2/common';
import {FormBuilder} from 'angular2/common';
import {Validators} from 'angular2/common';


import {Student} from '../student/student';
import {StudentService} from '../student/student.service';

import {Term} from '../term/term';
import {TermService} from '../term/term.service';

import {Predmet} from '../predmet/predmet';
import {PredmetService} from '../predmet/predmet.service';

import {IspitService} from '../ispit/ispit.service';





import {PredmetListComponent} from '../predmet/predmet-list.component';

@Component({
    selector:'prijava-component',
    
    templateUrl :'res/html/prijava/prijava-component.html',
    styleUrls:['res/css/prijava.css'],
    providers: [StudentService,TermService, IspitService, PredmetService],
    directives:[PredmetListComponent]
    
})
export class PrijavaComponent implements OnInit{
    myForm :ControlGroup;
    active = true;
    odsekid:number;
    trenutniPredmet: Predmet= {id:null, naziv:"odaberite", profesor:"ispit"};
    trenutniStudent:Student = { id:0, ime:"ime",prezime:"prezime", godinaStudija:0, odsek:0,kredit:0,pass:"pass", adresa: "adresa"};
    trenutniRok : number =null;
    public terms:Term[] =[{id: 1, datumPocetka:null, datumZavrsetka:null, naziv:"ucitavam"}];
    public potvrda: boolean = false;
    public rokNull :boolean = true;
    public warningHidden : boolean = true;
    
    public proba:number = 1;
    poruka:string = "";
    
    ime : string;
    constructor(private _formBuilder: FormBuilder, private _studentService: StudentService,
                    private _termService: TermService, private _ispitService: IspitService,
                    private _predmetService: PredmetService){}
    
    public getStud(){
        this._studentService.getStudent().subscribe(
            data =>{this.trenutniStudent = data},
            err =>console.error(err),
            ()=>console.log('ucitao studente')  
        );
        this.odsekid = this.trenutniStudent.id;
      }
      
      onTermSelect(id:number){
          console.log(id);
          this.trenutniRok = id;
          this.warningHidden=true;
      }
      onTermChange(newValue){
          console.log('new value' + newValue);
          this.trenutniRok=newValue;
          console.log('trenutni rok' + this.trenutniRok);
      }
      public getFutureTerms(){
         
            this._termService.getFutureTerms().subscribe(
            data =>  this.terms = data,
            err => console.error(err),
            () => console.log('Ucitao buduce rokove')
        );
      }
      
      updateStudentKredit(){
          this.trenutniStudent.kredit = this.trenutniStudent.kredit - 150;
          this._studentService.postStudent(this.trenutniStudent.ime, 
                    this.trenutniStudent.prezime, this.trenutniStudent.adresa,this.trenutniStudent.kredit,this.trenutniStudent.pass).subscribe(
            data =>  this.ime = data,
            err => console.error(err),
            () => console.log('Izmenio kredit')
            ); 
      }
      
      checkWarningMessage(){
          if (this.trenutniPredmet.id==null || this.trenutniRok==null ||this.trenutniRok == 0 || this.trenutniStudent.kredit<150){
              this.warningHidden = false;
          }else{
              this.warningHidden=true;
          }
          
      }
      onPotvrdi(){
          
          this._ispitService.putIspit(this.trenutniPredmet.id, 
                    this.trenutniRok, 0, "2015-06-15").subscribe(
            data =>  this.ime = data,
            err => console.error(err),
            () => console.log('Uneo novi ispit')
            ); 
            this.updateStudentKredit();
            this.potvrda=false;
            //Resetuje formu, kazu bice napravljen reset u nekoj novijoj verziji
            this.active = false;
            setTimeout(()=> this.active=true, 0);
            
            this.trenutniPredmet.id=null;
            this.trenutniPredmet.naziv="Odaberite predmet";
            this.trenutniPredmet.profesor= "Odaberite predmet";    
      }
      
      onOtkazi(){
          this.potvrda=false;
          this.warningHidden = true;
          this.active = false;
          setTimeout(()=> this.active=true, 0);
          this.trenutniPredmet.id=null;
          this.trenutniPredmet.naziv="Odaberite predmet";
          this.trenutniPredmet.profesor= "Odaberite predmet";
          this.trenutniRok=0;
      }
      
      onPrijaviIspit(){
          this.poruka="";
          console.log('u prijavi ispit!'+ this.trenutniRok);
          if(this.trenutniRok == null || this.trenutniRok == 0){
              this.warningHidden = false;
              this.poruka="Odaberite rok";
          }
          else 
          {
            if(this.trenutniStudent.kredit < 150){
                this.warningHidden = false;
              this.poruka="Nemate dovoljno kredita za prijavu";
            }
            else 
                if(this.trenutniPredmet.id==null){
                    this.warningHidden = false;
                     this.poruka="Odaberite predmet";
                }else{
                    this.potvrda=true;
                    this.warningHidden = true;
                }
             } 
      }
      
      predmetSelected(arg){
          let id = arg; 
          this._predmetService.getPredmet(id).subscribe(
            data =>  this.trenutniPredmet = data,
            err => console.error(err),
            () => console.log('Ucitao predmet')
          );
          //this.checkWarningMessage();
          this.warningHidden = true;
      }
      
      ngOnInit(){
          this.getStud();
           this.odsekid = this.trenutniStudent.odsek;
          this.getFutureTerms();
         
      }
}