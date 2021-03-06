import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
// import { ReadPage } from '../read/read';
import { PopoverPage } from '../../popover/popover';

@Component({
  selector: 'page-tolisten',
  templateUrl: 'tolisten.html'
})
export class TolistenPage {

  storieslist: any;
  choosetab: any;
  following: boolean;
  follows: string = " Follow";
  constructor(public navCtrl: NavController, params: NavParams, public popoverCtrl: PopoverController) {
    this.storieslist = params.get("data")

    this.choosetab = "toread"
  }

  presentPopover(myEvent) {
    console.log("pop over ")
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  // read() {
  //     this.navCtrl.push(ReadPage, { reads: this.storieslist[0] });
  // }
  back() {
    this.navCtrl.pop();
  }
  follow(following) {
    if (following) {
      this.following = false;
      this.follows = " Follow"

    }
    else {
      this.following = true;
      this.follows = " Following"
    }
  }
}
