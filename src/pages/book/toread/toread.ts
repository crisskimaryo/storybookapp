import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import { ReadPage } from '../read/read';
@Component({
  selector: 'page-toread',
  templateUrl: 'toread.html'
})
export class ToreadPage {

  storieslist: any ;
  choosetab: any;
  constructor(public navCtrl: NavController,params:NavParams) {
    this.storieslist=params.get("data")

    this.choosetab = "toread"
  }

  read() {
    this.navCtrl.push(ReadPage,{reads:this.storieslist[0]});
  }
   back() {
    this.navCtrl.pop();
  }
}
