System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var WelcomeScreenComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            WelcomeScreenComponent = (function () {
                function WelcomeScreenComponent(_router, _routeParams) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                WelcomeScreenComponent.prototype.ngOnInit = function () {
                    //this.pass = this._routeParams.get("pass");
                    this.student = { name: this._routeParams.get("name"), pass: this._routeParams.get("pass") }; //pass = this._routeParams.get("pass");
                };
                WelcomeScreenComponent = __decorate([
                    core_1.Component({
                        selector: 'welcome',
                        template: "\n       \n        <h3> Welcome {{student.name}}!!! :) <br>vasa lozinka je: {{student.pass}}</h3>\n        \n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams])
                ], WelcomeScreenComponent);
                return WelcomeScreenComponent;
            }());
            exports_1("WelcomeScreenComponent", WelcomeScreenComponent);
        }
    }
});
//# sourceMappingURL=welcome-screen.component.js.map