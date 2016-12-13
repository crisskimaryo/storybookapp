import { Component } from '@angular/core';

import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-popover',
  // tem
  template: `
    <ion-list>

      <button ion-item (click)="close()">bookmarks</button>
      <button ion-item (click)="close()">save</button>
    </ion-list>

  `
})
export class PopoverPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }
  close() {
    this.viewCtrl.dismiss();
  }

}
