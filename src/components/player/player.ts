import { Component } from '@angular/core';
import{NavController} from 'ionic-angular'

/*
  Generated class for the Player component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'player',
  templateUrl: 'player.html'
})
export class PlayerComponent {



  constructor(public navCtrl:NavController) {


  }
    back() {
    this.navCtrl.pop()
  }

  swipe() {

    this.navCtrl.pop()

  }


}
