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
// sub
import { ToreadPage } from '../pages/book/toread/toread';
import { TolistenPage } from '../pages/listen/tolisten/tolisten';
import { ReadPage } from '../pages/book/read/read';
//services
import { Data } from '../providers/data';
import { Book } from '../providers/book';
import { Images } from '../providers/images';
import { Listen } from '../providers/listen';
//component
import { PlayerComponent } from '../components/player/player'
import { ImageviewComponent } from '../components/imageview/imageview'

@NgModule({
  declarations: [
    MyApp,
    ListenPage,
    TolistenPage,

    ImagePage,
    BookPage,
    ToreadPage,
    ReadPage,
    HomePage,
    ProfilePage,
    PopoverPage,
    TabsPage,
    //components
    PlayerComponent,
    ImageviewComponent
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

    ImagePage,
    BookPage,
    ToreadPage,
    ReadPage,
    HomePage,
    ProfilePage,
    PopoverPage,
    TabsPage,
    //component
    PlayerComponent,
    ImageviewComponent
  ],

  providers: [Data, Book, Images, Listen]
})
export class AppModule { }
