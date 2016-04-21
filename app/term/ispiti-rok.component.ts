import {Component, OnInit, Input} from 'angular2/core';
import {IspitRok} from './ispit-rok';
import {IspitRokService} from './ispit-rok.service';
//import {ExamDetailsComponent} from './exam-details.component'

@Component({
    selector: 'ispiti-rok',
    template:`
       <div> Hello from Ispiti Rok liste</div>
        <div style="width : 400px; display: inline-block">
       <ul >
            <li *ngFor ="#exam of exams">
            
                {{exam.nazivPredmeta}} polozen: {{exam.polozio}}
                
                
            </li>
       </ul>
       </div>
       
     
      <!--<exam-details *ngIf = "selectedExam !== null" [exam] = "selectedExam"></exam-details>
     
             {{date | date: 'mediumDate'}}-->
      
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
    providers: [IspitRokService]
    
})
export class IspitiRokComponent implements OnInit {
    @Input()
     rokId:number;  
    public exams :IspitRok[]=[{nazivPredmeta: "predmet", polozio:1}];
    //public selectedExam: Exam=null;
   // public date: Date;
    //public rokId;
    constructor(private _examService: IspitRokService){}
    
    public getExams(){
       //this._examService.getExams().then((exams: Exam[]) => this.exams = exams);
        this._examService.getIspitRok(this.rokId).subscribe(
      // the first argument is a function which runs on success
      data => { this.exams = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );
    }
   /* onSelectExam(exam){
        this.selectedExam = exam;
    }*/
    ngOnInit(): any{
        this.getExams();
       // this.date = new Date(2015,3,15);
    }
}