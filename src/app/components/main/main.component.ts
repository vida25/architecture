import { Component, Input, OnInit } from '@angular/core';

import { SideBarComponent } from '../sideBar/sideBar.component';
import { WindowRef } from '../../models/window-ref';

@Component({
  moduleId: module.id,
  selector: "main-component",
  templateUrl: "./main.component.html",
  styleUrls: [ "./main.component.css" ],
})
export class MainComponent implements OnInit {
  constructor() {}

  public dayNightArray: string[] = [ 'day', 'night' ];
  public night: boolean = true;
  public dayNight: string

  ngOnInit() {
    this.setDayOrNight();
  }

  setDayOrNight() {
    this.dayNight = this.dayNightArray[+this.night];
    this.night = !this.night;
  }
}