import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Book {

    constructor(private http: Http) { }
    books() {
        return this.http.get('assets/mocks/booksdata.json')
            .map(res => res.json())
    }

    homedata() {
        return this.http.get('http://crisskimaryo.pythonanywhere.com/sb_api1/books/')
            .map(res => res.json())
    }

    offlinedata() {
        return this.http.get('assets/mocks/offlinedata.json')
            .map(res => res.json())
    }
}
