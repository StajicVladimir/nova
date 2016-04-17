import {Injectable} from 'angular2/core';
import {Exam} from './exam';
import {EXAMS} from './mock-exams';

@Injectable()
export class ExamService{
    getExams (){
        return Promise.resolve(EXAMS);
    }
}