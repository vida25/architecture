import {
  Component,
  Input,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';


import { SideBarComponent } from '../sideBar/sideBar.component';
import { WindowRef }        from '../models/window-ref';

@Component({
	moduleId: module.id,
  selector: "main-component",
  templateUrl: "./main.component.html",
  styleUrls: [ "./main.component.css" ],
  animations: [
    trigger('dayOrNightTrigger', [
      state('inactive', style({
        opacity: 1,
      })),
      state('active',   style({
       opacity: 0,
      })),
      transition('active => inactive', animate('1s ease-in')),
      transition('inactive => active', animate('1s ease-out'))
    ])
  ]
})
export class MainComponent {

  constructor( private windowRef: WindowRef ) {}

	dayOrNight: string = 'inactive';
	width: number =  this.windowRef.nativeWindow.innerWidth;
	height: number = this.windowRef.nativeWindow.innerHeight;
  dayOrNightValues: dayOrNightValuesInterface = {
    active: 'день',
    inactive: 'ніч'
  };

  aplyDayOrNight( elem: HTMLElement ) {
    elem.style.color = this.dayOrNight === 'inactive' ? 'black' : 'white';
    elem.style.background = this.dayOrNight === 'active' ? 'black' : 'white';
    this.dayOrNight = this.dayOrNight === 'active' ? 'inactive' : 'active';
  };

  onResize( event: any, background_day: HTMLElement, background_night: HTMLElement ) {
  	let width = event.target.innerWidth > 400 ? event.target.innerWidth : 400;
  	let height = event.target.innerHeight > 400 ? event.target.innerHeight : 400;
    let backgroundSize = `${width}px ${height}px`;
    background_day.style.backgroundSize = backgroundSize;
		background_night.style.backgroundSize = backgroundSize;
	}

}



export interface dayOrNightValuesInterface {
	active: string,
	inactive: string,
}