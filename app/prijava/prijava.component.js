System.register(['angular2/core', 'angular2/common', '../student/student.service', '../term/term.service', '../predmet/predmet-list.component'], function(exports_1, context_1) {
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
    var core_1, common_1, student_service_1, term_service_1, predmet_list_component_1;
    var PrijavaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (student_service_1_1) {
                student_service_1 = student_service_1_1;
            },
            function (term_service_1_1) {
                term_service_1 = term_service_1_1;
            },
            function (predmet_list_component_1_1) {
                predmet_list_component_1 = predmet_list_component_1_1;
            }],
        execute: function() {
            PrijavaComponent = (function () {
                function PrijavaComponent(_formBuilder, _studentService, _termService) {
                    this._formBuilder = _formBuilder;
                    this._studentService = _studentService;
                    this._termService = _termService;
                    this.trenutniStudent = { id: 2, ime: "dfds", prezime: "heeeeee", godinaStudija: 4, odsek: 5, kredit: 3, pass: "vlada" };
                    this.terms = [{ id: 1, date: "vlada" }];
                }
                PrijavaComponent.prototype.getStud = function () {
                    var _this = this;
                    this._studentService.getStudent().subscribe(function (data) { _this.trenutniStudent = data; }, function (err) { return console.error(err); }, function () { return console.log('done loading students'); });
                };
                PrijavaComponent.prototype.getFutureTerms = function () {
                    var _this = this;
                    this._termService.getFutureTerms().subscribe(function (data) { return _this.terms = data; }, function (err) { return console.error(err); }, function () { return console.log('done loading Terms'); });
                };
                PrijavaComponent.prototype.ngOnInit = function () {
                    this.getStud();
                    this.getFutureTerms();
                };
                PrijavaComponent = __decorate([
                    core_1.Component({
                        selector: 'prijava-component',
                        templateUrl: '../app/prijava/prijava-component.html',
                        styles: ["\n         label{\n            display: inline-block;\n            width: 140px;\n        }\n        input {\n            width: 250px;\n            margin: 10px 10px 0px 50px;\n        }\n        label{\n             margin:10px 10px 0px 50px;\n        }\n        button{\n           margin:10px 10px 0px 50px;\n        }\n             \n    "],
                        providers: [student_service_1.StudentService, term_service_1.TermService],
                        directives: [predmet_list_component_1.PredmetListComponent]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, student_service_1.StudentService, term_service_1.TermService])
                ], PrijavaComponent);
                return PrijavaComponent;
            }());
            exports_1("PrijavaComponent", PrijavaComponent);
        }
    }
});
//# sourceMappingURL=prijava.component.js.map