System.register(['angular2/core', './predmet.service'], function(exports_1, context_1) {
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
    var core_1, predmet_service_1;
    var PredmetListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (predmet_service_1_1) {
                predmet_service_1 = predmet_service_1_1;
            }],
        execute: function() {
            PredmetListComponent = (function () {
                function PredmetListComponent(_predmetService) {
                    this._predmetService = _predmetService;
                    this.predmeti = [{ id: 1, naziv: "vlada", profesor: "vlada" }];
                }
                PredmetListComponent.prototype.getPredmete = function () {
                    var _this = this;
                    this._predmetService.getPredmete().subscribe(function (data) { _this.predmeti = data; }, function (err) { return console.error(err); }, function () { return console.log('done loading foods'); });
                };
                PredmetListComponent.prototype.ngOnInit = function () {
                    this.getPredmete();
                };
                PredmetListComponent = __decorate([
                    core_1.Component({
                        selector: 'predmet-list',
                        template: "\n        <h2>Hello from liste predmeta</h2>\n        <ul>\n            <li *ngFor = \"#predmet of predmeti\">\n                {{predmet.naziv}} profesor: {{predmet.profesor}}\n            </li>\n        </ul>\n    ",
                        providers: [predmet_service_1.PredmetService]
                    }), 
                    __metadata('design:paramtypes', [predmet_service_1.PredmetService])
                ], PredmetListComponent);
                return PredmetListComponent;
            }());
            exports_1("PredmetListComponent", PredmetListComponent);
        }
    }
});
//# sourceMappingURL=predmet-list.component.js.map