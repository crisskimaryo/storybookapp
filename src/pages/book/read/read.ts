import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';

@Component({
  selector: 'page-read',
  templateUrl: 'read.html'
})
export class ReadPage {
  readstorieslist: any;
  chapter:any;
  constructor(public navCtrl: NavController,params:NavParams) {
   this.readstorieslist=params.get("reads")
  }
  slideHasChanged(index){
    console.log("slide " +index +"" +"changed")
  }
  closebt() {
    this.navCtrl.pop(ReadPage)
  }

}
