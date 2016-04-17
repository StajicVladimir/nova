import {Component, OnInit} from 'angular2/core';
import {Exam} from './exam';
import {ExamService} from './exam.service';

@Component({
    selector: 'exam-list',
    template:`
       <div> Hello from exam list</div>
       <ul >
            <li *ngFor ="#exam of exams">
                {{exam.subject}}
            </li>
       </ul>
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
    `]
    providers: [ExamService]
    
})
export class ExamListComponent implements OnInit {
    public exams = [];
    
    constructor(private _examService: ExamService){}
    public getExams(){
        this._examService.getExams().then((exams: Exam[]) => this.exams = exams);
    }
    ngOnInit(): any{
        this.getExams();
        
    }
}