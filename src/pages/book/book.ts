import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToreadPage } from '../book/toread/toread';

@Component({
    selector: 'page-book',
    templateUrl: 'book.html'
})
export class BookPage {
    images: any;
    searchQuery: string;

    choosebook: string;
    constructor(public navCtrl: NavController) { }

    ionViewDidLoad() {
        console.log('Hello BookPage Page');
        this.initializedata();
        this.choosebook = "All"
    }
    //this should load from server
    initializedata() {
        this.images = [];
    }



    getItems(ev:any) {
        // Reset items back to all of the items
        this.initializedata();

        // set val to the value of the searchbar
        let val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.images = this.images.filter((item) => {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }

    navstry() {

        this.navCtrl.push(ToreadPage)
    }





}
