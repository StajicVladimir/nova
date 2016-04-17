import {Component} from 'angular2/core';
import {ExamListComponent} from './exam/exam-list.component';
@Component({
    selector: 'history-component',
    template:`
        <h3> Term history! </h3>
        <exam-list></exam-list>
    `,
    directives:[ExamListComponent]
})
export class HistoryComponent{
    
}