import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import{RouteConfig} from 'angular2/router';
import {WelcomeScreenComponent} from './welcome/welcome-screen.component';
import {LoginComponent} from './login/login.component';

import {TermListComponent} from './term/term-list.component';
import {TermDetailsComponent} from './term/term-details.component';
import {GlobalVarsService} from './global-vars.service';
import {PrijavaComponent} from './prijava/prijava.component';
import {FutureTermsComponent} from './term/future-terms.component';
import {FutureTermsDetailsComponent} from './term/future-terms-details.component';
import {AllFutureTermsComponent} from './term/all-future-terms.component';

@Component({
	selector: 'my-app',
	template: `
		<div style="background-color: #269; height: 100%; width: 50%;margin: 0px 0px 0px 0px;padding:10px;
						border-radius: 10px;border: 2px solid #369;">
			<h2 style ="color: white;font-weight: bold;">Online Prijava Ispita</h2>
		</div>
		<header>
			<nav style="margin:0px 50px 0px 50px;">
				<a [hidden]= "_gVS.getLoggedIn()" [class.disabled]="_gVS.getLoggedIn()"[routerLink] = "['Login']" style ="float:right">Login</a>
				<a [hidden]= "!_gVS.getLoggedIn()" style="margin-right: 5px;"[class.disabled]="!_gVS.getLoggedIn()" style ="float:right" 
					(click)="onLogout()">Logout</a>
				<a [class.disabled]="!_gVS.getLoggedIn()" [routerLink] = "['Welcome']">Main Screen</a>
				<!--<a [class.disabled]="!_gVS.getLoggedIn()" [routerLink] = "['History']">History</a>-->
				<a [class.disabled]="!_gVS.getLoggedIn()" [routerLink] = "['Terms']">Istorijat Rokova</a>
				<a [class.disabled]="!_gVS.getLoggedIn()" [routerLink] = "['FutureTerms']">Moji Budući Rokovi</a>
				<a [class.disabled]="!_gVS.getLoggedIn()" [routerLink] = "['AllFutureTerms']">Budući Rokovi</a>
				<a [class.disabled]="!_gVS.getLoggedIn()" [routerLink] = "['Prijava']">Prijava Ispita</a>
			</nav>
		</header>
		
		<div style="margin:0px 50px 0px 50px;">
			
			<router-outlet></router-outlet>
		</div>
		`,
		styles:[`
			
			
			h2 {
				color :#269;
				
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
	//{path : '/History', name: 'History', component: HistoryComponent},
	{path : '/Terms', name: 'Terms', component: TermListComponent},
	{path : '/TermDetails', name: 'TermDetails', component: TermDetailsComponent},
	{path : '/Prijava', name: 'Prijava', component: PrijavaComponent},
	{path : '/FutureTerms', name: 'FutureTerms', component:FutureTermsComponent},
	{path : '/AllFutureTerms', name: 'AllFutureTerms', component:AllFutureTermsComponent},
	{path: '/FutureTermsDetails', name: 'FutureTermsDetails', component:FutureTermsDetailsComponent}
])
export class AppComponent
{	
	loggedIn: boolean;
	constructor (private _gVS : GlobalVarsService, private _router:Router){
		//this.loggedIn = _gVS.getLoggedIn();
	}
	public onLogout(){
		this._gVS.setLoggedIn(false);
		this._gVS.setStudentId(0);
		this._router.navigate(['Login'])
	}
	
 }

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/