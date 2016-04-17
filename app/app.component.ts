import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import{RouteConfig} from 'angular2/router';
import {WelcomeScreenComponent} from './welcome-screen.component';
import {LoginComponent} from './login.component';
import {HistoryComponent} from './history.component';
import {TermListComponent} from './term/term-list.component';
import {TermDetailsComponent} from './term/term-details.component';


@Component({
	selector: 'my-app',
	template: `
		<h1>Prijava ispita early days!</h1>
		<header>
			<nav>
				<a [routerLink] = "['Login']" style ="float:right">Login</a>
				<a [routerLink] = "['Welcome']">Main Screen</a>
				<a [routerLink] = "['History']">History</a>
				<a [routerLink] = "['Terms']">Terms</a>
			</nav>
		</header>
		<div>
			
			<router-outlet></router-outlet>
		</div>
		`,
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
	{path :'/welcome', name: 'Welcome', component: WelcomeScreenComponent},
	{path :'/login', name: 'Login', component: LoginComponent, useAsDefault: true},
	{path : '/History', name: 'History', component: HistoryComponent},
	{path : '/Terms', name: 'Terms', component: TermListComponent},
	{path : '/TermDetails', name: 'TermDetails', component: TermDetailsComponent}
])
export class AppComponent
{

 }

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/