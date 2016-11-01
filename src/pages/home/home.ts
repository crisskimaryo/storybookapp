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
  images: any[];


  searchQuery: string = '';


  constructor(public navCtrl: NavController) {
    this.initializedata();
  }

  initializedata() {
    this.images = [

       {
        title: "masudi kipanya",
        img: "img/katuni/mombasa kisiwa.jpeg",
      },
      {
        title: "masai mjini",
        img: "img/katuni/masai.jpeg",
      },
      {
        title: "traffic noma",
        img: "img/katuni/traffic.jpeg",
      },
      {
        title: "simba mtaita",
        img: "img/katuni/simba.jpeg",
      },
      {
        title: "masudi kipanya",
        img: "img/katuni/masoudi.jpeg",
      },
      {
        title: "kibonzo na jiji",
        img: "img/katuni/vibonjo.jpeg",
      },
        {
        title: "love for tz",
        img: "img/katuni/love tz.jpeg",
      },
         {
        title: "madenge",
        img: "img/katuni/madenge.jpeg",
      },
      {
        title: "maadili social",
        img: "img/katuni/maadili socialm.jpeg",
      },
        {
        title: "mafuriko",
        img: "img/katuni/mafuriko.jpeg",
      },
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializedata();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.images = this.images.filter((item) => {
        return ( item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  navstry() {

    this.navCtrl.push(ToreadPage)
  }

}
