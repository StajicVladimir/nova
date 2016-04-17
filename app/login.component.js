System.register(['angular2/core', 'angular2/common', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_formBuilder, _router, _routeParams) {
                    this._formBuilder = _formBuilder;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.student = { name: "", pass: "" };
                }
                LoginComponent.prototype.ngOnInit = function () {
                    //this.newContact = {firstName: '',lastName: this._routeParams.get('lastName'), phone:'', email: ''};
                    /* this.myForm = this._formBuilder.group({
                         'name' : [this.student.name,Validators.required],
                         'pass': ['',Validators.required],
                         
                     })*/
                };
                // ngOnOinit(){}
                LoginComponent.prototype.onLogin = function () {
                    this._router.navigate(['Welcome', { pass: this.student.pass }]);
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        template: "\n        <form #myForm = \"ngForm\" (ngSubmit) = \"onSubmit()\" >\n            <div>\n                <label for = \"user\">Username: </label>\n                <input type=\"text\" id=\"user\" \n                ngControl=\"user\" [(ngModel)]=\"student.name \"\n                required>\n            </div>\n            <div>\n                <label for = \"password\">Password: </label>\n                <input type=\"password\" id=\"password\" \n                   ngControl=\"pass\" [(ngModel)]=\"student.pass\"\n                   required >\n                {{student.pass}}\n            </div>\n            <div>\n                <button (click) = \"onLogin()\" [disabled] = \"!myForm.valid\">login</button>\n            </div>\n        </form>\n            \n    ",
                        styles: ["\n         label{\n            display: inline-block;\n            width: 140px;\n        }\n        input{\n            width: 250px;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, router_1.RouteParams])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map