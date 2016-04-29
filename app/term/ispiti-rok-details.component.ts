import {Component,OnInit} from 'angular2/core';

import {IspitRok} from './ispit-rok';
@Component({
    selector: 'ispiti-rok-details',
    templateUrl:'res/html/term/ispiti-rok-details.component.html',
    inputs:["exam"]
})
export class IspitiRokDetailsComponent {
    ocena:string = "ispit nije polozen";
    /*private exam;
    
    ngOnInit(){
        if(this.exam.polozio < 6){
            this.ocena = "Ispit nije položen"
        }else{
            this.ocena = this.exam.polozio;
        }
    }*/
}