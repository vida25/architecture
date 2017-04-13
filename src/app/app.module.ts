import { Http, Response, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ApartmentComponent } from './components/apartment/apartment.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlanningComponent } from './components/planning/planning.component';
import { AppRoutingModule } from './app.routing.module';
import { SideBarComponent } from './components/sideBar/sideBar.component';
import { SvgMenuComponent } from './components/svg-menu/svg-menu.component';
import { HouseComponent } from './components/house/house.component';
import { FloorComponent } from './components/floor/floor.component';
import { MainComponent } from './components/main/main.component';
import { AppComponent } from './app.component';

import { HighlightDirective } from './directives/higlight.directive';
import { PolygonDirective } from './directives/polygonDirective';

import { WindowRef } from './models/window-ref';

import { ApatrmentAboutService } from './services/apartment-about/apartment-about.service';
import { SectionsAboutService } from './services/section/section.service';

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    ApartmentComponent,
    PlanningComponent,
    NotFoundComponent,
    SideBarComponent,
    SvgMenuComponent,
    HouseComponent,
    FloorComponent,
    MainComponent,
    AppComponent,

    HighlightDirective,
    PolygonDirective,
  ],

  // Providers
  providers: [
    ApatrmentAboutService,
    SectionsAboutService,
    WindowRef,
  ],

  // Modules
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,

    // moduls created by developper;
    AppRoutingModule,
  ],

  // Main Component
  bootstrap: [ AppComponent ]
})

export class AppModule {
  constructor() { }
}