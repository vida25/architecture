import { Component } from "@angular/core";
import { WindowRef  } from '../models/window-ref';
@Component({
	moduleId: module.id,
  selector: "side-bar-component",
  templateUrl: "./sideBar.component.html",
  styleUrls: [ "./sideBar.component.css" ]
})
export class SideBarComponent {
  constructor(private windowRef: WindowRef) {
  }
  navHeight: number = 300;
  openCloseNav( openNavInstance: HTMLElement, slideNavInstance: HTMLElement ) {
    let height: number = this.windowRef.nativeWindow.innerHeight;
  	this.navHeight =  this.navHeight === 0 ? ( height >= 400 ? 300 : 220 ) : 0;
    slideNavInstance.style.height =  `${this.navHeight}px`;
  }
}