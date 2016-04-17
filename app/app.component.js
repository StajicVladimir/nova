System.register(['angular2/core', 'angular2/router', './welcome-screen.component', './login.component', './history.component'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, welcome_screen_component_1, login_component_1, history_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (welcome_screen_component_1_1) {
                welcome_screen_component_1 = welcome_screen_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (history_component_1_1) {
                history_component_1 = history_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t\t<h1>Prijava ispita early days!</h1>\n\t\t<header>\n\t\t\t<nav>\n\t\t\t\t<a [routerLink] = \"['Login']\" style =\"float:right\">Login</a>\n\t\t\t\t<a [routerLink] = \"['Welcome']\">Main Screen</a>\n\t\t\t\t<a [routerLink] = \"['History']\">History</a>\n\t\t\t</nav>\n\t\t</header>\n\t\t<div>\n\t\t\t\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t\t",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_2.RouteConfig([
                        { path: '/welcome', name: 'Welcome', component: welcome_screen_component_1.WelcomeScreenComponent, useAsDefault: true },
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
                        { path: '/History', name: 'History', component: history_component_1.HistoryComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.component.js.map