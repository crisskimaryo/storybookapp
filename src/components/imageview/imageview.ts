import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'
@Component({
  selector: 'imageview',
  templateUrl: 'imageview.html'
})
export class ImageviewComponent {
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
  }
  closebt() {
    this.navCtrl.pop();
  }
}
