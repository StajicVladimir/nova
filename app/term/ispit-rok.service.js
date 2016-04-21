System.register(['angular2/core', 'angular2/http', '../global-vars.service'], function(exports_1, context_1) {
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
    var core_1, http_1, global_vars_service_1;
    var IspitRokService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (global_vars_service_1_1) {
                global_vars_service_1 = global_vars_service_1_1;
            }],
        execute: function() {
            IspitRokService = (function () {
                function IspitRokService(_http, _gVS) {
                    this._http = _http;
                    this._gVS = _gVS;
                    this.urlPath = 'http://localhost:8080/RESTfulProject/REST/WebService/RokIspiti/';
                }
                IspitRokService.prototype.getIspitRok = function (rokId) {
                    this.urlPath = this.urlPath + this._gVS.getStudentId().toString() + ',' + rokId.toString();
                    return this._http.get(this.urlPath)
                        .map(function (res) { return res.json(); });
                };
                IspitRokService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, global_vars_service_1.GlobalVarsService])
                ], IspitRokService);
                return IspitRokService;
            }());
            exports_1("IspitRokService", IspitRokService);
        }
    }
});
//# sourceMappingURL=ispit-rok.service.js.map