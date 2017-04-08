import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Directive, Input, QueryList, ViewChildren, ViewChild} from '@angular/core';

import { ApartmentsStorage, ApatrmentInterface } from '../data/apartments.storage';

export interface roomSquareInterface {
  room: number;
  square: number;
}

@Component({
	moduleId: module.id,
  selector: "floor-component",
  templateUrl: "./floor.component.html",
  styleUrls: [ "./floor.component.css" ]
})
export class FloorComponent implements AfterViewInit {
	// id: number;
  private sub: any;
  information: string;
  about_apartment: roomSquareInterface;
  apartments: ApatrmentInterface[] = ApartmentsStorage;

  section: {id: number};
  floor: {id: number};
  house: {id: number};

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
 			this.sub = this.route.params.subscribe(params => {
      this.section = {
        id: params['id1']
      }
      this.house = {
        id: params['id2']
      }
      this.floor = {
        id: params['id3']
      }
      // this.id = +params['id']; (+) converts string 'id' to a number;
      // In a real app: dispatch action;
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngAfterViewInit () {

  }

 showData( event: any ) {
    let apart = this.apartments.find( (apartment)=>apartment.id === event.target.id );
    this.about_apartment = {
      room: apart.roomCount,
      square: apart.aboutApartment[0].value,
    }
  }
  hideData( event: any ) {
    this.about_apartment = null;
  }

}
