import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import{RouteConfig} from 'angular2/router';
import {WelcomeScreenComponent} from './welcome-screen.component';
import {LoginComponent} from './login.component';
import {HistoryComponent} from './history.component';
import {TermListComponent} from './term/term-list.component';
import {TermDetailsComponent} from './term/term-details.component';
import {GlobalVarsService} from './global-vars.service';


@Component({
	selector: 'my-app',
	template: `
		<h2>Prijava ispita early days!</h2>
		<header>
			<nav style="margin:0px 50px 25px 50px;">
				<a [routerLink] = "['Login']" style ="float:right">Login</a>
				<a [class.disabled]="!_gVS.getLoggedIn()" [routerLink] = "['Welcome']">Main Screen</a>
				<a [class.disabled]="!_gVS.getLoggedIn()" [routerLink] = "['History']">History</a>
				<a [class.disabled]="!_gVS.getLoggedIn()" [routerLink] = "['Terms']">Terms</a>
			</nav>
		</header>
		{{_gVS.getLoggedIn()}}
		<div style="margin:0px 50px 0px 50px;">
			
			<router-outlet></router-outlet>
		</div>
		`,
		styles:[`
			h2 {
				color :#369;
				
			}
			a.disabled {
   				pointer-events: none;
				background-color: #eee;
 			    color: #aaa;
   				cursor: default;
			}
		`],
		
	directives: [ROUTER_DIRECTIVES],
	providers: [GlobalVarsService]
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
	loggedIn: boolean;
	constructor (private _gVS : GlobalVarsService){
		this.loggedIn = _gVS.getLoggedIn();
	}
	
 }

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/