import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ListenPage } from '../pages/listen/listen';

import { BookPage } from '../pages/book/book';
import { ImagePage } from '../pages/image/image';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { PopoverPage } from '../pages/popover/popover'
import { SearchPage } from '../pages/search/search'
// sub
import { ToreadPage, introv } from '../pages/book/toread/toread';
import { TolistenPage } from '../pages/listen/tolisten/tolisten';
import { ReadPage } from '../pages/book/read/read';
//services
import { Data } from '../providers/data';
import { Book } from '../providers/book';
import { Images } from '../providers/images';
import { Listen } from '../providers/listen';
import { SoundCloud } from '../providers/sound-cloud/soundcloud'
//component
import { ListenplayerComponent } from '../components/listenplayer/listenplayer'
import { ImageviewComponent } from '../components/imageview/imageview'
import { notificationComponent } from '../components/notification/notification'

@NgModule({
  declarations: [
    MyApp,
    ListenPage,
    TolistenPage,
    SearchPage,
    ImagePage,
    BookPage,
    ToreadPage,
    introv,
    ReadPage,
    HomePage,
    ProfilePage,
    PopoverPage,
    TabsPage,
    //components
    ListenplayerComponent,
    ImageviewComponent,
    notificationComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp,
      {
        //custumize the tab look
        // tabsPlacement: 'bottom',
        //   platforms: {
        //     android: {
        //       tabsPlacement: 'top'
        //     },
        //     ios: {
        //       tabsPlacement: 'top'
        //     },
        //     windows:
        //     {
        //       tabsPlacement: 'top'
        //     }
        //   }
      })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListenPage,
    TolistenPage,
    introv,
    ImagePage,
    BookPage,
    ToreadPage,
    ReadPage,
    HomePage,
    SearchPage,
    ProfilePage,
    PopoverPage,
    TabsPage,
    //component
    ListenplayerComponent,
    ImageviewComponent,
    notificationComponent
  ],

  providers: [Data, Book, Images, Listen, SoundCloud]
})
export class AppModule { }
