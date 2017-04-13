import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { ApatrmentAboutService } from '../../services/apartment-about/apartment-about.service';
import { apartmentInterface } from '../../interfaces/apartment.interface';

import * as _ from 'underscore';

@Component({
  moduleId: module.id,
  selector: "apartment-component",
  templateUrl: "./apartment.component.html",
  styleUrls: [ "./apartment.component.css" ]
})
export class ApartmentComponent {
  private sub: any;

  public dimentions: dimentionInterface[] = Dimentions;
  public active: dimentionInterface = Dimentions[0];
  public apartmentsStorage: any = null;
  public currentApartment: any = null;
  public apartmentSrc: string;
  public apartmentId: string;

  constructor(
    private apatrmentAbout: ApatrmentAboutService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.apartmentId = `apartment${params['id']}`;
       // In a real app: dispatch action to load.
    });
    this.getAboutApartmentData().then( res => {
      this.apartmentsStorage = res;
      this.defCurrentApartment();
    });
  }

  getAboutApartmentData(id:any = null) {
      return this.apatrmentAbout.getApartments( id );
  }

  defCurrentApartment() {
    this.currentApartment = _.find(
          this.apartmentsStorage,
          apartment =>_.isEqual(apartment.id, this.apartmentId)
    );
    this.apartmentSrc = this.currentApartment['2d'];
  }

  changeView(d: dimentionInterface) {
    this.active = d;
    this.apartmentSrc = this.currentApartment[d.dim];
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy() { this.sub.unsubscribe(); }

}


export const Dimentions: dimentionInterface[] = [
  {dim: '2d'},
  {dim: '3d'}
]

export interface dimentionInterface {
  dim: string;
}
