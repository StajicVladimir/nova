System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ExamDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ExamDetailsComponent = (function () {
                function ExamDetailsComponent() {
                }
                ExamDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'exam-details',
                        template: "\n        <div style=\"border-radius: 10px; background: #eee; border: 2px solid #369; padding: 20px; display: inline-block\" >\n            ispit: {{exam.name}}<br>\n            datum: {{exam.id}}\n            \n        </div>\n        \n    ",
                        inputs: ["exam"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ExamDetailsComponent);
                return ExamDetailsComponent;
            }());
            exports_1("ExamDetailsComponent", ExamDetailsComponent);
        }
    }
});
/*#rcorners1 {
    border-radius: 25px;
    background: #73AD21;
    padding: 20px;
    width: 200px;
    height: 150px;
}*/
//"margin: 32px 0;padding: 16px;background-color: #eee;border: 1 px solid #ccc" 
//# sourceMappingURL=exam-details.component.js.map