import {Injectable} from 'angular2/core';
import {Term} from './term';
import {TERMS} from './mock-terms';

@Injectable()
export class TermService{
    getTerms (){
        return Promise.resolve(TERMS);
    }
}