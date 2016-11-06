import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class Data {
  static get parameters() {
    return [[Http]];
  }
  constructor(public http: Http) {

  }

  // getbooks() {

  //   this.http.get('http://127.0.0.1:8000/sb_api1/books/')
  //     .map(res => res.json())
  //     .subscribe(data => {
  //       console.log(data);
  //     });

  // }

  // getbook() {

  //   this.http.get('http://127.0.0.1:8000/sb_api1/books/')
  //     .toPromise()
  //     .then(data => {
  //       console.log(data);
  //     });

  // }

}


