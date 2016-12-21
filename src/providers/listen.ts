import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Listen {

  constructor(public http: Http) { }
  offlinelisten() {
    return this.http.get('assets/mocks/books.json')
      .map(res => res.json())
  }

  listen() {
    return this.http.get('assets/mocks/books.json')
      .map(res => res.json())
  }
}

