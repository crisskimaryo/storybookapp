import { Component , ViewChild } from '@angular/core';
import { NavController, List } from 'ionic-angular';
import { ToreadPage } from '../book/toread/toread';

@Component({
  selector: 'page-book',
  templateUrl: 'book.html'
})
export class BookPage {
 @ViewChild('scheduleList', {read: List}) scheduleList: List;
  images: any[];


  searchQuery: string = '';

  choosebook='all';
  constructor(public navCtrl: NavController) {
    this.initializedata();
    this.choosebook = "All"
  }

  initializedata() {
    this.images = [
      {
        title: "masudi kipanya",
        img: "img/katuni/madenge.jpeg",
      },
      {
        title: "masudi kipanya",
        img: "img/katuni/magu.jpeg",
      },
      {
        title: "masudi kipanya",
        img: "img/katuni/mafuriko.jpeg",
      },

      {
        title: "masudi kipanya",
        img: "img/katuni/mombasa kisiwa.jpeg",
      },
      {
        title: "masudi kipanya",
        img: "img/katuni/masai.jpeg",
      },
      {
        title: "masudi kipanya",
        img: "img/katuni/traffic.jpeg",
      },

      {
        title: "masudi kipanya",
        img: "img/katuni/masoudi.jpeg",
      },
      {
        title: "masudi kipanya",
        img: "img/katuni/vibonjo.jpeg",
      },
      {
        title: "masudi kipanya",
        img: "img/katuni/masai.jpeg",
      },
      {
        title: "masudi kipanya",
        img: "img/katuni/traffic.jpeg",
      },

      {
        title: "tz Love",
        img: "img/katuni/love tz.jpeg",
      },
      {
        title: "mo ibra",
        img: "img/katuni/ibra.jpeg",
      },
      {
        title: "shalo simba",
        img: "img/katuni/simba.jpeg",
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
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  navstry() {

    this.navCtrl.push(ToreadPage)
  }


}
