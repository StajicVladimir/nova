import {Component, OnInit, Input} from 'angular2/core';
import {IspitRok} from './ispit-rok';
import {IspitRokService} from './ispit-rok.service';
import {IspitiRokDetailsComponent} from './ispiti-rok-details.component'
//import {ExamDetailsComponent} from './exam-details.component'

@Component({
    selector: 'ispiti-rok',
    template:`
       <div> <h2>Spisak ispita koje ste polagali u ovom roku:</h2></div>
        <div style="width : 30%; display: inline-block; float: left;" >
       <ul >
            <li *ngFor ="#exam of exams"
                (click) = "onSelectExam(exam)">
                
                <div style ="width: 100%">
                   <span style= "display:inline-block; width:50%; font-weight:bold;">{{exam.nazivPredmeta}}</span> 
                   <span style= "display:inline-block; width:50%; float:right;">Ocena: {{exam.polozio}}</span>
                 </div>
                 
                
                
            </li>
       </ul>
       </div>
       
      <!--<div style = "width : 70%;height: 500px display: inline-block;">--> 
            <ispiti-rok-details *ngIf = "selectedExam !== null" [exam] = "selectedExam" ></ispiti-rok-details>
      <!--</div>-->             
      
    `,
    styles: [`
        ul{
    list-style: none;
    margin: 16px;
    padding: 0;
}

li{
    cursor: pointer;
    transition: padding 0.3s;
}

li:hover{
    padding-left: 8px;
    color: #369;
    font-weight: bold;
    border-left: 3px solid #369;
}
.clicked{
    color: #369;
    font-weight: bold;
}

    `],
    //directives: [ExamDetailsComponent],
    inputs: ['rokId'],
    providers: [IspitRokService],
    directives: [IspitiRokDetailsComponent] 
    
})
export class IspitiRokComponent implements OnInit {
    @Input()
     rokId:number;  
    public exams :IspitRok[]=[{nazivPredmeta: "ucitavam", polozio:0,profesor:"ucitavam", datum:null}];
    selectedExam :IspitRok = null;
    constructor(private _examService: IspitRokService){}
    
    public getExams(){
       
        this._examService.getIspitRok(this.rokId).subscribe(
            data => { this.exams = data},
            err => console.error(err),
            () => console.log('ucitao ispite')
        );
    }
   onSelectExam(exam){
       this.selectedExam = exam;
   }
    ngOnInit(): any{
        this.getExams();
    }
}