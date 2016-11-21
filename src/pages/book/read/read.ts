import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

@Component({
  selector: 'page-read',
  templateUrl: 'read.html'
})
export class ReadPage {
  @ViewChild('storySlider') slider: Slides;
  readstorieslist: any;
  chapter: any;

  slideindex: number;
  storySlide: any;



// this code is very slow i think there is need for code optimization
  constructor(public navCtrl: NavController, params: NavParams) {
    this.readstorieslist = params.get("reads")
    this.slideindex = params.get("st")
    this.storySlide = {
      initialSlide: this.slideindex -1
      // ,loop: true
    };
    console.log(this.slideindex);
  }
  slideHasChanged(index) {

    console.log("slide " + index + "" + "changed")
  }
  closebt() {
    this.navCtrl.pop(ReadPage)
  }



}

