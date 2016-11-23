import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

@Component({
  selector: 'page-read',
  templateUrl: 'read.html'
})
export class ReadPage implements OnInit {
  @ViewChild('storySlider') slider: Slides;
  readstorieslist: any;
  chapter: any;

  slideindex: number;
  storySlide: any;
  // this code is very slow i think there is need for code optimization
  constructor(public navCtrl: NavController, public params: NavParams) {
    this.params = params

    console.log(this.slideindex);
  }

  slideHasChanged(index) {

    console.log("slide " + index + "" + "changed")
  }
  closebt() {
    this.navCtrl.pop(ReadPage)
  }

  ngOnInit() {
    console.log("will enter")
    this.readstorieslist = this.params.get("reads")
    this.slideindex = this.params.get("st")
    console.log(this.slideindex + " " + this.readstorieslist)
    this.storySlide = {
      initialSlide: this.slideindex - 1
      // ,loop: true
    };
  }


}

