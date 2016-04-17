import {Component, OnInit} from 'angular2/core';
import {Exam} from './exam';
import {ExamService} from './exam.service';
import {ExamDetailsComponent} from './exam-details.component'

@Component({
    selector: 'exam-list',
    template:`
       <div> Hello from exam list</div>
       <ul >
            <li *ngFor ="#exam of exams"
            (click) = "onSelectExam(exam)">
                {{exam.subject}}
                
                
            </li>
       </ul>
      <exam-details *ngIf = "selectedExam !== null" [exam] = "selectedExam"></exam-details>
     
      {{date | date: 'mediumDate'}}
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
    directives: [ExamDetailsComponent],
    providers: [ExamService]
    
})
export class ExamListComponent implements OnInit {
    public exams = [];
    public selectedExam: Exam=null;
    public date: Date;
    
    constructor(private _examService: ExamService){}
    public getExams(){
        this._examService.getExams().then((exams: Exam[]) => this.exams = exams);
    }
    onSelectExam(exam){
        this.selectedExam = exam;
    }
    ngOnInit(): any{
        this.getExams();
        this.date = new Date(2015,3,15);
    }
}