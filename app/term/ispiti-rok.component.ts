import {Component, OnInit, Input} from 'angular2/core';
import {IspitRok} from './ispit-rok';
import {IspitRokService} from './ispit-rok.service';
import {IspitiRokDetailsComponent} from './ispiti-rok-details.component'


@Component({
    selector: 'ispiti-rok',
    templateUrl:'res/html/term/ispiti-rok.component.html',
    styleUrls:['res/css/term.css'],
    
    
    inputs: ['rokId'],
    providers: [IspitRokService],
    directives: [IspitiRokDetailsComponent] 
    
})
export class IspitiRokComponent implements OnInit {
    @Input()
     rokId:number;  
     public polozen: string = "Ocena: ";
     public nijePolozen: string = "Nije položen"; 
    public exams :IspitRok[]=[{nazivPredmeta: "ucitavam", polozio:0,profesor:"ucitavam", datum:null}];
    selectedExam :IspitRok = {nazivPredmeta: "ucitavam", polozio:0,profesor:"ucitavam", datum:null};
    
    public noExamsMessage = "Nema ispita";
    constructor(private _examService: IspitRokService){}
    
    public getExams(){
       
        this._examService.getIspitRok(this.rokId).subscribe(
            data => { this.exams = data},
            err => console.error(err),
            () => console.log('Ucitao ispite')
        );
        
    }
   onSelectExam(exam){
       this.selectedExam = exam;
   }
    ngOnInit(): any{
        this.getExams();
        
    }
}