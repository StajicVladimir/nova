System.register(['angular2/core', './ispit-rok.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ispit_rok_service_1;
    var IspitiRokComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ispit_rok_service_1_1) {
                ispit_rok_service_1 = ispit_rok_service_1_1;
            }],
        execute: function() {
            //import {ExamDetailsComponent} from './exam-details.component'
            IspitiRokComponent = (function () {
                //public selectedExam: Exam=null;
                // public date: Date;
                //public rokId;
                function IspitiRokComponent(_examService) {
                    this._examService = _examService;
                    this.exams = [{ nazivPredmeta: "predmet", polozio: 1 }];
                }
                IspitiRokComponent.prototype.getExams = function () {
                    var _this = this;
                    //this._examService.getExams().then((exams: Exam[]) => this.exams = exams);
                    this._examService.getIspitRok(this.rokId).subscribe(
                    // the first argument is a function which runs on success
                    function (data) { _this.exams = data; }, 
                    // the second argument is a function which runs on error
                    function (err) { return console.error(err); }, 
                    // the third argument is a function which runs on completion
                    function () { return console.log('done loading foods'); });
                };
                /* onSelectExam(exam){
                     this.selectedExam = exam;
                 }*/
                IspitiRokComponent.prototype.ngOnInit = function () {
                    this.getExams();
                    // this.date = new Date(2015,3,15);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], IspitiRokComponent.prototype, "rokId", void 0);
                IspitiRokComponent = __decorate([
                    core_1.Component({
                        selector: 'ispiti-rok',
                        template: "\n       <div> Hello from Ispiti Rok liste</div>\n        <div style=\"width : 400px; display: inline-block\">\n       <ul >\n            <li *ngFor =\"#exam of exams\">\n            \n                {{exam.nazivPredmeta}} polozen: {{exam.polozio}}\n                \n                \n            </li>\n       </ul>\n       </div>\n       \n     \n      <!--<exam-details *ngIf = \"selectedExam !== null\" [exam] = \"selectedExam\"></exam-details>\n     \n             {{date | date: 'mediumDate'}}-->\n      \n    ",
                        styles: ["\n        ul{\n    list-style: none;\n    margin: 16px;\n    padding: 0;\n}\n\nli{\n    cursor: pointer;\n    transition: padding 0.3s;\n}\n\nli:hover{\n    padding-left: 8px;\n    color: #369;\n    font-weight: bold;\n    border-left: 3px solid #369;\n}\n.clicked{\n    color: #369;\n    font-weight: bold;\n}\n    "],
                        //directives: [ExamDetailsComponent],
                        inputs: ['rokId'],
                        providers: [ispit_rok_service_1.IspitRokService]
                    }), 
                    __metadata('design:paramtypes', [ispit_rok_service_1.IspitRokService])
                ], IspitiRokComponent);
                return IspitiRokComponent;
            }());
            exports_1("IspitiRokComponent", IspitiRokComponent);
        }
    }
});
//# sourceMappingURL=ispiti-rok.component.js.map