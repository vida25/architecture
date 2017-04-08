import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent }   		   from './app.component';
import { MainComponent }         from './main/main.component';
import { PlanningComponent }     from './planning/planning.component';
import { HouseComponent }        from './house/house.component';
import { FloorComponent }        from './floor/floor.component';
import { ApartmentComponent }    from './apartment/apartment.component';
import { NotFoundComponent }     from './not-found/not-found.component';


const routes: Routes = [
  { path: 'main',  component: MainComponent },
  { path: 'planning',  component: PlanningComponent },
  { path: 'house/:id',  component: HouseComponent },
  { path: 'house/:id1/section/:id2/floor/:id3', component: FloorComponent },
  { path: 'house/:id1/section/:id2/floor/:id3/apartment/:id4', component: ApartmentComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot( routes, {
    useHash: true
  })],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
  // { path: 'main',  component: AppComponent },