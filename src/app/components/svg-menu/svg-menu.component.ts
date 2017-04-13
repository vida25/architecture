import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: "g[svg-menu-component]",
  templateUrl: "./svg-menu.component.html",
  styleUrls: [ "./svg-menu.component.scss" ]
})
export class SvgMenuComponent {
  // private sub: any;
  constructor(
    private router: Router
  ) {}

  goToFloor() {
    let url = `/house/${1}/section/${1}/floor/${3}`;
    this.router.navigate([url]);
  }
}