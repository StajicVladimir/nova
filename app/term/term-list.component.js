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
                function TermListComponent(_termService, _router, _routeParams) {
                    this._termService = _termService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.terms = [];
                    this.selectedTerm = null;
                }
                TermListComponent.prototype.getTerms = function () {
                    var _this = this;
                    this._termService.getTerms().then(function (terms) { return _this.terms = terms; });
                };
                TermListComponent.prototype.ngOnInit = function () {
                    this.getTerms();
                };
                TermListComponent.prototype.onSelectTerm = function (term) {
                    this.selectedTerm = term;
                    this._router.navigate(['TermDetails', { date: this.selectedTerm.date.toISOString(), pass: this.selectedTerm.pass }]);
                };
                TermListComponent = __decorate([
                    core_1.Component({
                        selector: 'term-list',
                        template: "\n       <div> Hello from term list</div>\n       <ul >\n            <li *ngFor =\"#term of terms\"\n            (click) = \"onSelectTerm(term)\">\n                {{term.date | date: 'mediumDate'}}\n                \n                \n            </li>\n       </ul>\n    \n    ",
                        styles: ["\n        ul{\n    list-style: none;\n    margin: 16px;\n    padding: 0;\n}\n\nli{\n    cursor: pointer;\n    transition: padding 0.3s;\n}\n\nli:hover{\n    padding-left: 8px;\n    color: #369;\n    font-weight: bold;\n    border-left: 3px solid #369;\n}\n.clicked{\n    color: #369;\n    font-weight: bold;\n}\n    "],
                        providers: [term_service_1.TermService]
                    }), 
                    __metadata('design:paramtypes', [term_service_1.TermService, router_1.Router, router_1.RouteParams])
                ], TermListComponent);
                return TermListComponent;
            }());
            exports_1("TermListComponent", TermListComponent);
        }
    }
});
//# sourceMappingURL=term-list.component.js.map