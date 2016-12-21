import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToreadPage } from '../book/toread/toread';
import {Book} from '../../providers/book'

@Component({
    selector: 'page-book',
    templateUrl: 'book.html'
})
export class BookPage {
    bkdata: Array<any>;
    searchQuery: string;

    choosebook: string;
    constructor(public navCtrl: NavController, public _books:Book) { }

    ionViewDidLoad() {

        this.initializedata();
        this.choosebook = "All"
    }
    //this should load from server
    initializedata() {
        return this._books.books()
        .subscribe(
          data=>{
            this.bkdata=data.book
            console.log(this.bkdata);
           }

        )
    }

    getItems(ev:any) {
        // Reset items back to all of the items
        this.initializedata();

        // set val to the value of the searchbar
        let val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this. bkdata = this. bkdata.filter((item) => {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }
 navstry(img) {


    let book = this.bkdata.filter(
      bkdata => bkdata.id === img.id);

    this.navCtrl.push(ToreadPage, { data: book, img })
    console.log(book)
  }




}
