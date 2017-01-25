import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { Images } from '../../providers/images'
import { ImageviewComponent } from '../../components/imageview/imageview'
// import {} from '../../components/player/player'
import { AngularFire, FirebaseListObservable } from 'angularfire2';
// import firebase from 'firebase';

@Component({
  selector: 'page-image',
  templateUrl: 'image.html'
})
export class ImagePage {
  images: any;
  items: FirebaseListObservable<any[]>;
  userProfile: any;
  chooseimage: any;
  imgdt: any;
  features: any;
  constructor(

    private af: AngularFire,
    public navCtrl: NavController,
    public imagesServise: Images,
    public modalctrl: ModalController,
    public params: NavParams
  ) {
    this.chooseimage = "series"
    this.features = {
      slidesPerView: 2.5,
      paginationClickable: true
    }
  }

  ionViewDidLoad() {

    // return this.imagesServise.Image().subscribe(
    //   data => { this.images = data }
    )
  }
  imgview(dt) {

    let modal = this.modalctrl.create(ImageviewComponent, { data: dt, imgdata: this.images })
    modal.present()
  }
}

