import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Images {

  constructor(public http: Http) { }

  Image() {
    return this.http.get('assets/mocks/books.json')
      .map(res => res.json())
  }


}
