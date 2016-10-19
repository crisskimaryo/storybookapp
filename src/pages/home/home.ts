import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { BookPage } from '../book/book';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

goBack(){
  console.log("hey i am clicked");
  this.navCtrl.push(BookPage,{})
}

}
