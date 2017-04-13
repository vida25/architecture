import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { Input, Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router }  from '@angular/router';
import { Location } from '@angular/common';

import { ApatrmentAboutService } from '../../services/apartment-about/apartment-about.service';
import { apartmentInterface } from '../../interfaces/apartment.interface';

import * as _ from 'underscore';

@Component({
  moduleId: module.id,
  selector: "floor-component",
  templateUrl: "./floor.component.html",
  styleUrls: [ "./floor.component.css" ],
})
export class FloorComponent implements OnInit {
  private sub: any;

  public apartmentsInformation: any = null;
  public aboutApartment: any;
  public information: string;

  public sectionId: string;
  public floorId: string;
  public houseId: string;

  constructor(
    private apatrmentAbout: ApatrmentAboutService,
    private domSanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: any) => {
          this.sectionId = params['id1'];
          this.houseId = params['id2'];
          this.floorId = params['id3'];
    });
    this.getAboutApartmentData('apartments').then( res => {
        this.apartmentsInformation = res;
    });
  }

  showData(apartment) {
      this.aboutApartment = {
        square: apartment.aboutApartment[0].value,
        room: apartment.roomCount,
      }
  }

  replaceSpace(str: string) {
    return str.replace(/ /ig, ",");
  }

  getAboutApartmentData(id:any = null) {
      return this.apatrmentAbout.getApartments( id );
  }

  hideData() {
    this.aboutApartment = null;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goToApartment(id) {
    let order = id.match(/\d+$/);
    let url = `/house/${this.houseId}/section/${this.sectionId}/floor/${this.floorId}/apartment/${order}`;
    this.router.navigate([url]);
  }

}
