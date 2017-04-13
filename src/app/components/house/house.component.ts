import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SectionsAboutService } from '../../services/section/section.service';
import { SvgMenuComponent } from '../svg-menu/svg-menu.component';

import * as _ from 'underscore';

@Component({
  moduleId: module.id,
  selector: 'house-component',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit, OnDestroy {
  public selectedMenuItem: any = null;
  private sections: any = null;
  private houseId: number;
  private sub: any;

  constructor(
    private sectionsService: SectionsAboutService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.houseId = +params['id'];

      // In a real app: dispatch action to load the details here.
    });

    this.getSections();
  }

  getSections() {
    this.sectionsService.getSections().then( res => {
      this.sections = res;
    });
  }

  replaceSpace(str: string) {
    return str.replace(/ /ig, ",");
  }

  makeVisibleSvgMenu( section ): void {
    this.selectedMenuItem = _.isEqual(section.sectionId, this.selectedMenuItem)
            ? null
            : section.sectionId;
  }
  isEqual(a, b) {
    return _.isEqual(a,b);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}