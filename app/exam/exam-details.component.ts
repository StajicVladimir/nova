import {Component} from 'angular2/core';
import {Exam} from './exam';

@Component({
    selector: 'exam-details',
    template:`
        <div style="border-radius: 10px; background: #eee; border: 2px solid #369; padding: 20px; display: inline-block" >
            ispit: {{exam.name}}<br>
            datum: {{exam.id}}
            
        </div>
        
    `,
   
    inputs: ["exam"]
})
export class ExamDetailsComponent{
    public exam:Exam;
}
/*#rcorners1 {
    border-radius: 25px;
    background: #73AD21;
    padding: 20px;
    width: 200px;
    height: 150px;
}*/
//"margin: 32px 0;padding: 16px;background-color: #eee;border: 1 px solid #ccc"