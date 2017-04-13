import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { apartmentInterface } from '../../interfaces/apartment.interface';

import 'rxjs/add/operator/toPromise';
import * as _ from 'lodash';


@Injectable()
export class ApatrmentAboutService {
    private defValue: string = 'apartments';

    constructor (private http: Http) {}

    urlMaker(id: any) {
      let idPassed = _.isEqual(id, null)
            ? this.defValue
            : id;
      return `./src/app/data/about-apartment/${ idPassed }.json`;
    };

    getApartments(idPassed: any): Promise<any> {
      return this.http.get(this.urlMaker(idPassed))
             .toPromise()
             .then(response => response.json())
             .catch(this.handleError);
    };

    private handleError (error: Response | any) {
      return Promise.reject(error.message || error);
    };

}