import {Component, OnInit} from 'angular2/core';
import {ControlGroup} from 'angular2/common';
import {FormBuilder} from 'angular2/common';
import {Validators} from 'angular2/common';
import {Router,RouteParams} from 'angular2/router';
 
import {Student} from '../student/student';
import {StudentService} from '../student/student.service';

import {Term} from '../term/term';
import {TermService} from '../term/term.service';

import {Predmet} from '../predmet/predmet';
import {PredmetService} from '../predmet/predmet.service';

import {IspitService} from '../ispit/ispit.service';
import {GlobalVarsService} from '../global-vars.service';




import {PredmetListComponent} from '../predmet/predmet-list.component';
import {ProbaPrijaveComponent} from '../predmet/proba-prijave.component';

@Component({
    selector:'prijava-component',
    
    templateUrl :'res/html/prijava/prijava-component.html',
    styleUrls:['res/css/prijava.css'],
    providers: [StudentService,TermService, IspitService, PredmetService],
    directives:[PredmetListComponent, ProbaPrijaveComponent]
    
})
export class PrijavaComponent implements OnInit{
    myForm :ControlGroup;
    
    probaRokId : number=0;
    probaRokNaziv: string ="";
    probaRokPocetak:string ="";
    probaRokZavrsetak:string ="";
    
    
    odsekid:number;
    trenutniPredmet: Predmet= {id:null, naziv:"odaberite", profesor:"ispit"};
    trenutniStudent:Student = { id:0, ime:"ime",prezime:"prezime", godinaStudija:0, odsek:0,kredit:0,pass:"pass", adresa: "adresa"};
   
    public potvrda: boolean = false;
   
    public warningHidden : boolean = true;
    
    
    poruka:string = "";
    
    public ime:string;
    constructor(private _formBuilder: FormBuilder, private _studentService: StudentService,
                    private _termService: TermService, private _ispitService: IspitService,
                    private _predmetService: PredmetService,private _routeParams: RouteParams,private _router: Router,
                    private _gVS: GlobalVarsService){}
    
    public getStud(){
        this._studentService.getStudent().subscribe(
            data =>{this.trenutniStudent = data},
            err =>console.error(err),
            ()=>console.log('ucitao studenta')  
        );
       // this.odsekid = this.trenutniStudent.odsek;
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
      
      onPotvrdi(){
          
          this._ispitService.putIspit(this.trenutniPredmet.id, 
                    this.probaRokId, 0, "2015-06-15").subscribe(
            data =>  this.ime = data,
            err => console.error(err),
            () => console.log('Uneo novi ispit')
            ); 
            this.updateStudentKredit();
            this.potvrda=false;
            
            this._router.navigate(['FutureTerms']);
      }
      
      onOtkazi(){
          this.potvrda=false;
          this.warningHidden = true;
         
          this._router.navigate(['FutureTerms']); 
      }
      
      onPovratak(){
          this._router.navigate(['FutureTerms']);
      }
      
      onPrijaviIspit(){
          this.poruka="";
          console.log('u prijavi ispit!');
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
      
      
      predmetSelected(arg){
          let id = arg; 
          this._predmetService.getPredmet(id).subscribe(
            data =>  this.trenutniPredmet = data,
            err => console.error(err),
            () => console.log('Ucitao predmet')
          );
          
          this.warningHidden = true;
      }
      
      ngOnInit(){
          this.getStud();
           this.odsekid = this.trenutniStudent.odsek;
            this.probaRokId = +this._routeParams.get('rokId');
            this.probaRokNaziv=  this._routeParams.get('rokNaziv');
            this.probaRokPocetak = this._routeParams.get('rokPocetak');
            this.probaRokZavrsetak = this._routeParams.get('rokZavrsetak')
      }
}