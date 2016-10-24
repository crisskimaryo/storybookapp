import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-read',
  templateUrl: 'read.html'
})
export class ReadPage {

  constructor(public navCtrl: NavController) {
    console.log("hey  read")

  }
  closebt() {
    this.navCtrl.pop(ReadPage)
  }

}
