import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReadPage } from '../read/read';
@Component({
  selector: 'page-toread',
  templateUrl: 'toread.html'
})
export class ToreadPage {

  constructor(public navCtrl: NavController) {
    console.log("hey toread")
  }

  read() {
    this.navCtrl.push(ReadPage);
  }
}
