System.register(['angular2/core', 'angular2/router', '../exam/exam-list.component'], function(exports_1, context_1) {
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
    var core_1, router_1, exam_list_component_1;
    var TermDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (exam_list_component_1_1) {
                exam_list_component_1 = exam_list_component_1_1;
            }],
        execute: function() {
            TermDetailsComponent = (function () {
                function TermDetailsComponent(_router, _routeParams) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                TermDetailsComponent.prototype.ngOnInit = function () {
                    //this.pass = this._routeParams.get("pass");
                    //this.term = {date : this._routeParams.get("date"),pass : this._routeParams.get("pass")};
                    this.datum = this._routeParams.get("date");
                    this.datum = this.datum.substring(0, 10);
                    //pass = this._routeParams.get("pass");
                };
                TermDetailsComponent.prototype.onBackToTermList = function () {
                    //this._router.navigate(['Terms']);
                };
                TermDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'term-details',
                        template: "\n        <h2>Details for term from {{datum}}</h2> \n        <exam-list><exam-list>\n        <button (click)= \"onBackToTermList()\">Back to Term list</button>\n    ",
                        directives: [exam_list_component_1.ExamListComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams])
                ], TermDetailsComponent);
                return TermDetailsComponent;
            }());
            exports_1("TermDetailsComponent", TermDetailsComponent);
        }
    }
});
//# sourceMappingURL=term-details.component.js.map