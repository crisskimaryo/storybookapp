import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-player',
  templateUrl: 'player.html'
})
export class PlayerPage {

  constructor(public navCtrl: NavController) {

  }

//for future this should be change is not the better solution
  back() {
    this.navCtrl.pop()
  }

  swipe() {

    this.navCtrl.pop()

  }



}
