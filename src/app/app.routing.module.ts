import { RouterModule, Routes }  from '@angular/router';
import { NgModule } from '@angular/core';

import { ApartmentComponent } from './components/apartment/apartment.component';
import { PlanningComponent } from './components/planning/planning.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HouseComponent } from './components/house/house.component';
import { FloorComponent } from './components/floor/floor.component';
import { MainComponent } from './components/main/main.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'house/:id1/section/:id2/floor/:id3/apartment/:id', component: ApartmentComponent },
  { path: 'house/:id1/section/:id2/floor/:id3', component: FloorComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'planning', component: PlanningComponent },
  { path: 'house/:id', component: HouseComponent },
  { path: 'main', component: MainComponent },
  { path: '**', component: NotFoundComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
];
@NgModule({
  imports: [ RouterModule.forRoot( routes, {
    useHash: true
  })],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
  // { path: 'main',  component: AppComponent },