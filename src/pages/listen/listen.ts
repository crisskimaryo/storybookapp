import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Listen } from '../../providers/listen'
@Component({
  selector: 'page-listen',
  templateUrl: 'listen.html'
})
export class ListenPage {
  chooselisten: string;
  public listens: any[];
  constructor(
    public navCtrl: NavController,
    public _listen: Listen
  ) {

  }

  ionViewDidLoad() {

   this.chooselisten = "All";
    this._listen.listen()
      .subscribe(
      data => { this.listens = data.listen; },
      err => {
        this.offlinedata()
        console.log(err);
      }
      );
  }
  offlinedata() {
    this._listen.offlinelisten()
      .subscribe(
      data => { this.listens = data.listen; },
      err => { console.log(err); }
      );

  }
}
