import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ToreadPage } from '../book/toread/toread';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // for testing array data in html
  jj: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  images: any = [

     {
      img:"img/katuni/masoudi.jpeg",
    },
     {
      img:"img/katuni/love tz.jpeg",
    },
     {
      img:"img/katuni/ibra.jpeg",
    },
     {
      img:"img/katuni/simba.jpeg",
    },
  ];

  constructor(public navCtrl: NavController) {
  }

 navstry() {

    this.navCtrl.push(ToreadPage)
  }

}
