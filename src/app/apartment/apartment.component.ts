import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { ApartmentsStorage, ApatrmentInterface } from '../data/apartments.storage';

export const Dimentions: dimentionInterface[] = [
  {dim: '2d'},
  {dim: '3d'}
]

export interface dimentionInterface {
  dim: string;
}

@Component({
	moduleId: module.id,
  selector: "apartment-component",
  templateUrl: "./apartment.component.html",
  styleUrls: [ "./apartment.component.css" ]
})
export class ApartmentComponent {
   id1: number;       //house id
   id2: number;       //section id
   id3: number;       //floor id
 	 id4: string;       //apartment id
  private sub: any;
  active: dimentionInterface = Dimentions[0];
  dimentions: dimentionInterface[] = Dimentions;
  apartmentsStorage: ApatrmentInterface[] = ApartmentsStorage;
  currentApartment: ApatrmentInterface;
  apartmentSrc: string;
  constructor(private route: ActivatedRoute, private router: Router, private location: Location) {}
  ngOnInit() {
 			this.sub = this.route.params.subscribe(params => {
      this.id1 = +params['id1']; // (+) converts string 'id' to a number
      this.id2 = +params['id2'];
      this.id3 = +params['id3'];
      this.id4 = params['id4'];

       // In a real app: dispatch action to load.
    });
     this.defCurrentApartment();
  }
  ngOnDestroy() { this.sub.unsubscribe(); }

  defCurrentApartment() {
    this.currentApartment = this.apartmentsStorage.find(( apartment ) => {
      return apartment.id == this.id4 && apartment.section == this.id2;
    });
    this.apartmentSrc = this.currentApartment['2d'];
  }

  changeView(event: any, d: dimentionInterface) {
    this.active = d;
    this.apartmentSrc = this.currentApartment[d.dim];
    // console.log ( this.currentApartment );
    console.log ( this.apartmentSrc  );
  }

  goBack() {
    this.location.back();
  }



}

