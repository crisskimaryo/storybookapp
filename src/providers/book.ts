import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Book provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Book {

  constructor(private http: Http) {
    console.log('Hello Book Provider');
  }

  books() {
     this.http.get('assets/mocks/offlinedata.json')
      .map(res => res.json())
      .subscribe(
         data => {

                console.log(data)
            },
            err => {

                console.log(err);
            },
            () => {

            }
      )

  }

}
