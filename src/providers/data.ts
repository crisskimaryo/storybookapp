import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class Data {
    static get parameters() {
        return [[Http]];
    }
     likes: any = []
    constructor(public http: Http) {

    }






    likeme() {
    }

    unlikeme() {
        console.log("unlike")
    }


}

