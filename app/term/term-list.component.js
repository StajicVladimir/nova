System.register(['angular2/core', './term.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, term_service_1, router_1;
    var TermListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (term_service_1_1) {
                term_service_1 = term_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            TermListComponent = (function () {
                function TermListComponent(_router, _routeParams, _termService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._termService = _termService;
                    this.terms = [{ id: 1, date: "vlada" }];
                }
                TermListComponent.prototype.getTerms = function () {
                    var _this = this;
                    this._termService.getTerms().subscribe(function (data) { return _this.terms = data; }, function (err) { return console.error(err); }, function () { return console.log('done loading Terms'); });
                };
                TermListComponent.prototype.ngOnInit = function () {
                    this.getTerms();
                };
                TermListComponent = __decorate([
                    core_1.Component({
                        selector: '<term-list>',
                        template: "\n        <h3>Spisak rokova u kojima ste bili aktivni: </h3>\n        <ul>\n            <li *ngFor =\"#term of terms\">\n                {{term.date}}\n            </li>\n        </ul>\n        \n    ",
                        providers: [term_service_1.TermService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, term_service_1.TermService])
                ], TermListComponent);
                return TermListComponent;
            }());
            exports_1("TermListComponent", TermListComponent);
        }
    }
});
//# sourceMappingURL=term-list.component.js.map