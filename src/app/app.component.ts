import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
//testing sound cloud api
import { SoundCloud } from '../providers/sound-cloud/soundcloud';
import { TabsPage } from '../pages/tabs/tabs';
import firebase from 'firebase';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, soundCloud:SoundCloud) {
     firebase.initializeApp({
   apiKey: "AIzaSyDwd0_voNaScHmIgI8DPiMzg3LcA1pIcOE",
    authDomain: "storybookapp-10bfd.firebaseapp.com",
    databaseURL: "https://storybookapp-10bfd.firebaseio.com",
    storageBucket: "storybookapp-10bfd.appspot.com",
    messagingSenderId: "140586700015"
  });
  console.log(firebase)
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      //sound cloud
      soundCloud.fetchTracks(120, 'electronic');
    });
  }
}
