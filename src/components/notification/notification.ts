import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Book } from '../../providers/book'



@Component({
  selector: 'notification',
  templateUrl: 'notification.html'
})
export class notificationComponent {

  public results: any;
  public im:any;
  constructor(public navCtrl: NavController, public _book: Book) { }

  ionViewDidLoad() {
    this._book.homedata()
      .subscribe(
      data => {
        this.results = data;
        //temporary object for search data retrieve on null
        this.im = data;
        console.log(this.results)
      },
      err => {
        console.log(err);
      },
      () => { }
      );

  }


  close() {
    this.navCtrl.pop()
  }

  initializedata() {
    //temporary solution for retrieve data back when input is null
    this.results = this.im;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializedata();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.results= this.results.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
