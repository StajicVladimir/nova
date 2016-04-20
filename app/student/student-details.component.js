System.register(['angular2/core', './student.service', '../global-vars.service'], function(exports_1, context_1) {
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
    var core_1, student_service_1, global_vars_service_1;
    var StudentDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (student_service_1_1) {
                student_service_1 = student_service_1_1;
            },
            function (global_vars_service_1_1) {
                global_vars_service_1 = global_vars_service_1_1;
            }],
        execute: function() {
            StudentDetailsComponent = (function () {
                function StudentDetailsComponent(_studentService, _gVS) {
                    this._studentService = _studentService;
                    this._gVS = _gVS;
                    this.trenutniStudent = { id: 2, ime: "dfds", prezime: "heeeeee", godinaStudija: 4, odsek: 5, kredit: 3 };
                }
                StudentDetailsComponent.prototype.getStud = function () {
                    var _this = this;
                    this._studentService.getStudent().subscribe(function (data) { _this.trenutniStudent = data; }, function (err) { return console.error(err); }, function () { return console.log('done loading students'); });
                    //this.students[1].ime= "noooooo";
                    //this.duzina = this.students.length;
                    /* this.jedan = {id:this.students[0].id, ime:this.students[0].ime,
                                      prezime: this.students[0].prezime, godinaStudija: this.students[0].godinaStudija,
                                      odsek: this.students[0].odsek, kredit: this.students[0].kredit};*/
                };
                StudentDetailsComponent.prototype.ngOnInit = function () {
                    this.getStud();
                    //this.jedan = this.students.pop();
                    //this.duzina = this.students.length;
                    //this.jedan = this.students[3];
                };
                StudentDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'student-details',
                        template: "\n            \n            <h3>Hello From student details </h3>\n            \n           Ime i prezime: {{trenutniStudent.ime}} {{trenutniStudent.prezime}}<br>\n           Na odseku: {{trenutniStudent.odsek}}<br>\n           Godina: {{trenutniStudent.godinaStudija}}<br>\n           Uplaceno: {{trenutniStudent.kredit}}rsd\n           \n           \n           \n                \n    ",
                        providers: [student_service_1.StudentService]
                    }), 
                    __metadata('design:paramtypes', [student_service_1.StudentService, global_vars_service_1.GlobalVarsService])
                ], StudentDetailsComponent);
                return StudentDetailsComponent;
            }());
            exports_1("StudentDetailsComponent", StudentDetailsComponent);
        }
    }
});
//# sourceMappingURL=student-details.component.js.map