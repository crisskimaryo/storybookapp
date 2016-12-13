import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { Images } from '../../providers/images'
import { ImageviewComponent } from '../../components/imageview/imageview'
// import {} from '../../components/player/player'


@Component({
  selector: 'page-image',
  templateUrl: 'image.html'
})
export class ImagePage {
  imgdata: Array<any>;
  choosest: any;
  imgdt: any;
features:any;
  constructor(
    public navCtrl: NavController,
    public imagesServise: Images,
    public modalctrl: ModalController,
    public params: NavParams
  ) {
    this.choosest = "series"
    this.features = {
      slidesPerView: 2.5,
      paginationClickable: true
    }
  }

  ionViewDidLoad() {
    return this.imagesServise.Image().subscribe(
      data => { this.imgdata = data }
    )
  }

  imgview(dt) {

    let modal = this.modalctrl.create(ImageviewComponent, { data: dt, imgdata: this.imgdata })
    modal.present()
  }
}

