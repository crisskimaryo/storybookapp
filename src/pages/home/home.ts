import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams, ModalController } from 'ionic-angular';
import {SearchPage} from '../search/search'
import { ToreadPage } from '../book/toread/toread';
import { TolistenPage } from '../listen/tolisten/tolisten';
import { Data } from '../../providers/data'
import { Http } from '@angular/http';
import { PlayerComponent } from '../../components/player/player'
import { Book } from '../../providers/book'
import { Listen } from '../../providers/listen'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Data],

})

export class HomePage {
  listens: any[];
  images: any[];
  offlineLoading: any;
  public played: any;
  //temporary object for search data retrieve on null
  im: any;
  searchQuery: string = '';
  features:any;
  constructor(
    private modalCtrl: ModalController,
    public navCtrl: NavController,
    private dataService: Data,
    public http: Http,
    public Loading: LoadingController,
    public params: NavParams,
    public _book: Book,
    public _listen: Listen
  ) {

    this.played = false;
    this.features = {
      slidesPerView: 2.3

    }

  }



  ionViewDidLoad() {
    this._listen.offlinelisten()
      .subscribe(
      data => { this.listens = data; }
      )

    this.offlineLoading = this.Loading.create({
      content: 'changing to offline, Please Wait...',
      duration: 3000
    });

    let loading = this.Loading.create({
      content: 'loading, Please Wait...',
      duration: 1000
    });

    loading.present()
    this._book.homedata()
      .subscribe(
      data => {
        this.images = data;
        //temporary object for search data retrieve on null
        this.im = data;
        console.log(this.images)
      },
      err => {
        loading.dismiss()
        this.offlinedata()
        console.log(err);
      },
      () => {

      }

      );

  }
  offlinedata() {
    this.offlineLoading.present()
    this._book.offlinedata()
      .subscribe(
      data => {
        this.images = data;
        //temporary object for search data retrieve on null
        this.im = data;
        console.log(this.images)
        // this.offlineLoading.dismiss()
      },
      err => {
        console.log(err);
        this.offlineLoading.dismiss()
      },
      () => {

      }

      );

  }
  initializedata() {
    //temporary solution for retrieve data back when input is null
    this.images = this.im;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializedata();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.images = this.images.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }




  // swipe directions

  // DIRECTION_NONE         1
  // DIRECTION_LEFT         2
  // DIRECTION_RIGHT        4
  // DIRECTION_UP           8
  // DIRECTION_DOWN         16
  // DIRECTION_HORIZONTAL   6
  // DIRECTION_VERTICAL     24
  // DIRECTION_ALL          30

  swipe(e) {
    let modal = this.modalCtrl.create(PlayerComponent);
    modal.present();
    this.played = false;
    console.log("swiped")
    if (e.direction == 8) {
      console.log("swiped" + e.direction);
    }
  }
  listenplay(lis) {
    this.played = true;
    this.played = lis;
    console.log(this.played)
    console.log("playing :" + "  " + lis.title + ", Duration: " + lis.duration);
  }

  navstry(img) {


    let book = this.images.filter(
      images => images.id === img.id);

    this.navCtrl.push(ToreadPage, { data: book, img })
    console.log(book)
  }
  listennav(img) {
    let listen = this.images.filter(
      images => images.id === img.id);

    this.navCtrl.push(TolistenPage, { data: listen, img })
    console.log(img)
  }
  liked(img) {
    if (img.like) {
      img.like = false;
      img.n_likes--;
    }

    else {
      img.like = true;

      img.n_likes++;

    }
  }



searchnav(){
  let modal =this.modalCtrl.create(SearchPage)
  modal.present()
}
}
