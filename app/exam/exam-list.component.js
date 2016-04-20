System.register(['angular2/core', './exam.service', './exam-details.component'], function(exports_1, context_1) {
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
    var core_1, exam_service_1, exam_details_component_1;
    var ExamListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (exam_service_1_1) {
                exam_service_1 = exam_service_1_1;
            },
            function (exam_details_component_1_1) {
                exam_details_component_1 = exam_details_component_1_1;
            }],
        execute: function() {
            ExamListComponent = (function () {
                function ExamListComponent(_examService) {
                    this._examService = _examService;
                    this.selectedExam = null;
                }
                ExamListComponent.prototype.getExams = function () {
                    var _this = this;
                    //this._examService.getExams().then((exams: Exam[]) => this.exams = exams);
                    this._examService.getExams().subscribe(
                    // the first argument is a function which runs on success
                    function (data) { _this.exams = data; }, 
                    // the second argument is a function which runs on error
                    function (err) { return console.error(err); }, 
                    // the third argument is a function which runs on completion
                    function () { return console.log('done loading foods'); });
                };
                ExamListComponent.prototype.onSelectExam = function (exam) {
                    this.selectedExam = exam;
                };
                ExamListComponent.prototype.ngOnInit = function () {
                    this.getExams();
                    this.date = new Date(2015, 3, 15);
                };
                ExamListComponent = __decorate([
                    core_1.Component({
                        selector: 'exam-list',
                        template: "\n       <div> Hello from exam list</div>\n        <div style=\"width : 400px; display: inline-block\">\n       <ul >\n            <li *ngFor =\"#exam of exams\"\n            (click) = \"onSelectExam(exam)\">\n                {{exam.name}}\n                \n                \n            </li>\n       </ul>\n       </div>\n      <exam-details *ngIf = \"selectedExam !== null\" [exam] = \"selectedExam\"></exam-details>\n     \n      {{date | date: 'mediumDate'}}\n    ",
                        styles: ["\n        ul{\n    list-style: none;\n    margin: 16px;\n    padding: 0;\n}\n\nli{\n    cursor: pointer;\n    transition: padding 0.3s;\n}\n\nli:hover{\n    padding-left: 8px;\n    color: #369;\n    font-weight: bold;\n    border-left: 3px solid #369;\n}\n.clicked{\n    color: #369;\n    font-weight: bold;\n}\n    "],
                        directives: [exam_details_component_1.ExamDetailsComponent],
                        providers: [exam_service_1.ExamService]
                    }), 
                    __metadata('design:paramtypes', [exam_service_1.ExamService])
                ], ExamListComponent);
                return ExamListComponent;
            }());
            exports_1("ExamListComponent", ExamListComponent);
        }
    }
});
//# sourceMappingURL=exam-list.component.js.map