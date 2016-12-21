import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, ModalController,AlertController } from 'ionic-angular';
import { ReadPage } from '../read/read';
import { PopoverPage } from '../../popover/popover';
import { Data } from '../../../providers/data'
@Component({
  selector: 'introv',
  template: `
<ion-content style="background:rgba(0,0,0,.4); "  >
<span style="position: absolute; top: 0%; left:45%; " >
   <button ion-button  icon-only clear large (click)="close()">
        <ion-icon  color="orange"  name="close"></ion-icon>

      </button>
</span>
<p style="padding:5%;background:rgba(244,247,247,.8);bottom:10%;padding-top:12%; " wrap>

"huyu leo simuachi nitamsubiri hapa hapa hadi niondoke nae hawezi tesa hisia zangu."<br>
Nilijiapiza kumsubiri Grace hata niongozane nae. ila akaelekea maktaba ya shule hapo nikakaa chini ya mti wa muembe nikimsubiri.<br>
Wanafunzi wote walitawanyika tayari hata rafiki zangu walishaondoka.<br>
Nikiwa nimekaa sina habari.
"huyu leo simuachi nitamsubiri hapa hapa hadi niondoke nae hawezi tesa hisia zangu."<br>
Nilijiapiza kumsubiri Grace hata niongozane nae. ila akaelekea maktaba ya shule hapo nikakaa chini ya mti wa muembe nikimsubiri.<br>
Wanafunzi wote walitawanyika tayari hata rafiki zangu walishaondoka.<br>
Nikiwa nimekaa sina habari.

"huyu leo simuachi nitamsubiri hapa hapa hadi niondoke nae hawezi tesa hisia zangu."<br>
Nilijiapiza kumsubiri Grace hata niongozane nae. ila akaelekea maktaba ya shule hapo nikakaa chini ya mti wa muembe nikimsubiri.<br>
Wanafunzi wote walitawanyika tayari hata rafiki zangu walishaondoka.<br>
Nikiwa nimekaa sina habari.
"huyu leo simuachi nitamsubiri hapa hapa hadi niondoke nae hawezi tesa hisia zangu."<br>
Nilijiapiza kumsubiri Grace hata niongozane nae. ila akaelekea maktaba ya shule hapo nikakaa chini ya mti wa muembe nikimsubiri.<br>
Wanafunzi wote walitawanyika tayari hata rafiki zangu walishaondoka.<br>
Nikiwa nimekaa sina habari<b>..........</b>




</p>
</ion-content>
`
})
export class introv { 
  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public popoverCtrl: PopoverController,
    public modalctr: ModalController,
    public alertctrl:AlertController,
    public dataservice: Data
  ) {}
  close(){
    this.navCtrl.pop()
  }
}

@Component({
  selector: 'page-toread',
  templateUrl: 'toread.html'
})
export class ToreadPage {

  storieslist: any;
  choosetab: any;
  following: boolean;
  follows: string = " Follow";
  features: any;
  propdatas: any;
  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public popoverCtrl: PopoverController,
    public modalctr: ModalController,
    public alertctrl:AlertController,
    public dataservice: Data
  ) {
    this.storieslist = params.get("data")

    this.choosetab = "toread"
    this.features = {
      slidesPerView: 4
    }
  }
  ionViewDidLoad() {
    this.dataservice.propbooks()
      .subscribe(data => { this.propdatas = data })
  }


  presentPopover(myEvent) {
    console.log("pop over ")
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  read(st) {

    this.navCtrl.push(ReadPage, { reads: this.storieslist[0], st: st.id });
  }
  back() {
    this.navCtrl.pop();
  }
  follow(following) {
    if (following) {
      this.following = false;
      this.follows = " Follow"

    }
    else {
      this.following = true;
      this.follows = " Following"
    }
  }

  introview() {
    let modal = this.modalctr.create(introv);
    modal.present()
  }

 
}
