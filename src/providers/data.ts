import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

  constructor(public http: Http) { }
// call proposed books
  propbooks() {
    return this.http.get('assets/mocks/booksdata.json')
      .map(res => res.json())
  }


}
