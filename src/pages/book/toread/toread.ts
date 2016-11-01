import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReadPage } from '../read/read';
@Component({
  selector: 'page-toread',
  templateUrl: 'toread.html'
})
export class ToreadPage {
  storieslist: any = [
    {
      title: "mama ni mama",
      chapter: "sehemu ya 1",
    },
    {
      title: "utamu wa pesa",
      chapter: "sehemu ya 2",
    },
    {
      title: "sitaki nataka",
      chapter: "sehemu ya 3",
    },
    {
      title: "nipe yeto",
      chapter: "sehemu ya 4",
    },
    {
      title: "sikio lakufa",
      chapter: "sehemu ya 5",
    },
    {
      title: "nipe nikupe",
      chapter: "sehemu ya 5",
    },
    {
      title: "pale kati ....",
      chapter: "sehemu ya 5",
    },
  ];
  choosetab: any;
  constructor(public navCtrl: NavController) {
    console.log("hey toread")
    this.choosetab = "book"
  }

  read() {
    this.navCtrl.push(ReadPage);
  }
   back() {
    this.navCtrl.pop();
  }
}
