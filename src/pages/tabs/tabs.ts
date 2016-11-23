import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ListenPage } from '../listen/listen';
import { BookPage } from '../book/book';
import { ImagePage } from '../image/image';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  HomeRoot: any = HomePage;
  ProfileRoot: any = ProfilePage;
  BookRoot: any = BookPage;
  ListenRoot: any = ListenPage;
  ImageRoot: any = ImagePage;
  constructor() {

  }
}
