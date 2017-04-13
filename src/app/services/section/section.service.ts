import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import * as _ from 'underscore';


@Injectable()
export class SectionsAboutService {
    constructor (
      private http: Http
    ) {}

    urlMaker() {
      return `./src/app/data/sections/sections.json`;
    };

    getSections(): Promise<any> {
      return this.http.get(this.urlMaker())
             .toPromise()
             .then(response => response.json())
             .catch(this.handleError);
    };

    private handleError (error: Response | any) {
      return Promise.reject(error.message || error);
    };

}