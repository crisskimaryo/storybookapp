import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-book',
  templateUrl: 'book.html'
})
export class BookPage {

  constructor(public navCtrl: NavController) {

  }



reBack(){
  console.log("hey i am clicked out");
  this.navCtrl.pop(BookPage)
}

}
