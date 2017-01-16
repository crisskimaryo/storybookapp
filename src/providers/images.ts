import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
@Injectable()
export class Images {

 images$: FirebaseListObservable<any>;
  constructor(public http: Http,private af:AngularFire) {}
 
  Image() {
    this.images$=this.af.database.list('/image')
    return   this.images$
 } }
