System.register(['angular2/core', 'angular2/common', './student/student.service', 'angular2/router', './global-vars.service'], function(exports_1, context_1) {
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
    var core_1, common_1, student_service_1, router_1, global_vars_service_1;
    var LoginComponent;
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
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (global_vars_service_1_1) {
                global_vars_service_1 = global_vars_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_gVS, _formBuilder, _router, _routeParams, _studentService) {
                    this._gVS = _gVS;
                    this._formBuilder = _formBuilder;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._studentService = _studentService;
                    //public lozinka: string;
                    //public user: number;
                    this.student = { id: 2, ime: "dfds", prezime: "heeeeee", godinaStudija: 4, odsek: 5, kredit: 3, pass: "nj" };
                }
                //private id: number;
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.getStud = function () {
                    var _this = this;
                    this._studentService.getStudent().subscribe(function (data) { _this.student = data; }, function (err) { return console.error(err); }, function () { return console.log('done loading students'); });
                };
                LoginComponent.prototype.onLogin = function () {
                    this._gVS.setStudentId(this.studentIndeks);
                    this.getStud();
                    if (this.student.id == this.studentIndeks && this.student.pass == this.lozinka) {
                        this._gVS.setLoggedIn(true);
                        //this.student.id = +this.student.name;
                        this._router.navigate(['Welcome', { name: this.studentIndeks, pass: this.lozinka }]);
                    }
                    else {
                        this._router.navigate(['Login']);
                    }
                };
                LoginComponent.prototype.onSubmit = function () { };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        template: "\n        <form #myForm = \"ngForm\">\n            <br>\n            <div class=\"form-group\">\n                <label for = \"user\">Username: </label>\n                <input class=\"form-control\" type=\"text\" id=\"user\" \n                ngControl=\"user\" [(ngModel)]=\"studentIndeks\" #user = \"ngForm\"\n                \n                required>\n                {{studentIndeks}}\n                <div style=\"width : 250px; margin:10px 10px 0px 50px; \" [hidden]=\"user.valid\" class=\"alert alert-danger\">\n                 Name is required\n             </div>\n            </div>\n             \n            \n            <div >\n                <label for = \"password\">Password: </label>\n                <input class=\"form-control\" type=\"password\" id=\"password\" \n                   ngControl=\"pass\" [(ngModel)]=\"lozinka\" #pass = \"ngForm\"\n                   \n                   required >\n               <!-- {{student.pass}} -->\n                <div style=\"width : 250px; margin:10px 10px 0px 50px; \" [hidden]=\"pass.valid\" class=\"alert alert-danger\">\n                 Password is required\n             </div>\n            </div>\n            \n            <br>\n            <div>\n                <button (click) = \"onLogin()\" [disabled] = \"!myForm.valid\" >login</button>\n            </div>\n            \n        </form>\n            \n    ",
                        styles: ["\n         label{\n            display: inline-block;\n            width: 140px;\n        }\n        input {\n            width: 250px;\n            margin: 10px 10px 0px 50px;\n        }\n        label{\n             margin:10px 10px 0px 50px;\n        }\n        button{\n           margin:10px 10px 0px 50px;\n        }\n             \n    "],
                        providers: [student_service_1.StudentService]
                    }), 
                    __metadata('design:paramtypes', [global_vars_service_1.GlobalVarsService, common_1.FormBuilder, router_1.Router, router_1.RouteParams, student_service_1.StudentService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map