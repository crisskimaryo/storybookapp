import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
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
  pp: any = [1, 2,3,4,5];
  constructor(public navCtrl: NavController) {
  }

  likeme() {

    this.navCtrl.push(ProfilePage)
  }

}
