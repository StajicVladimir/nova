import {Component, OnInit} from 'angular2/core';
import {Term} from './term';
import {TermService} from './term.service';
//import {ExamDetailsComponent} from './exam-details.component'
import {Router, RouteParams} from 'angular2/router';

@Component({
    selector: 'term-list',
    template:`
       <div> Hello from term list</div>
       <ul >
            <li *ngFor ="#term of terms"
            (click) = "onSelectTerm(term)">
                {{term.date}}
                
                
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
    `],
    providers: [TermService]
    
})
export class TermListComponent implements OnInit {
    public terms = [];
    public selectedTerm : Term = null;
    
    constructor(private _termService: TermService, private _router: Router, private _routeParams: RouteParams){}
    public getTerms(){
       // this._termService.getTerms().then((terms: Term[]) => this.terms = terms);
         this._termService.getTerms().subscribe(
      data => { this.terms = data},
      err => console.error(err),
      () => console.log('done loading foods')
    );
    }
    ngOnInit(): any{
        this.getTerms();
    }
    onSelectTerm(term){
        this.selectedTerm=term;
        this._router.navigate(['TermDetails',{date: this.selectedTerm.date}]);
    }
    
    /*public exams = [];
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
    }*/
}