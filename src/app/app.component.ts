import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
//testing sound cloud api
import { SoundCloud } from '../providers/sound-cloud/soundcloud';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, soundCloud:SoundCloud) {
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
