import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'
@Component({
  selector: 'listenplayer',
  templateUrl: 'listenplayer.html'
})

export class ListenplayerComponent {
  imgs: any;
  imglist: any[];
  features: any;
  constructor(
    public navCtrl: NavController,
    public params: NavParams
  ) {
    this.imgs = this.params.get('data')
    this.imglist = this.params.get('imgdata')
    this.features = {
      slidesPerView: 3.5,
      paginationClickable: true
    }


  }
  ionViewDidLoad() {


  }

  swipe(e) {
    if (e.direction == 16) {

      this.navCtrl.pop()
    }
    if (e.direction == 8) {
      console.log("swiped" + e.direction);
      this.navCtrl.pop()
    }
  }
  closebt() {
    this.navCtrl.pop();
  }


}
