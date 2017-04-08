import { NgModule } 								from '@angular/core';
import { BrowserModule }						from '@angular/platform-browser';
import { FormsModule }							from '@angular/forms';
import { RouterModule }							from '@angular/router';
import { BrowserAnimationsModule } 	from '@angular/platform-browser/animations';

import { WindowRef } 								from './models/window-ref';

import { AppRoutingModule } 				from './app.routing.module';
import { AppComponent }							from './app.component';
import { MainComponent } 						from './main/main.component';
import { HighlightDirective } 			from './directives/higlight.directive';
import { SideBarComponent } 				from './sideBar/sideBar.component';
import { PlanningComponent } 				from './planning/planning.component';
import { HouseComponent } 					from './house/house.component';
import { FloorComponent } 					from './floor/floor.component';
import { ApartmentComponent } 			from './apartment/apartment.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
	// Components, Pipes, Directive
	declarations: [
		AppComponent,
		MainComponent,
		SideBarComponent,
		PlanningComponent,
		HouseComponent,
		FloorComponent,
		ApartmentComponent,

		HighlightDirective,

		NotFoundComponent,
	],

	// Providers
	providers: [
		WindowRef
	],

	// Modules
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule,
		AppRoutingModule,
		BrowserAnimationsModule,
	],

	// Main Component
	bootstrap: [ AppComponent	]
})

export class AppModule {
	constructor() { }
}