import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams, ModalController } from 'ionic-angular';
import { ToreadPage } from '../book/toread/toread';
import { TolistenPage } from '../listen/tolisten/tolisten';
import { Data } from '../../providers/data'
import { Http } from '@angular/http';
import { PlayerPage } from '../listen/player/player'


@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [Data]
})
export class HomePage {
    listens: any = [
        {
            title: "mama ima",
            duration: "00:20:04",
            views: "300",
            likes: "201",
            like: 0,
        },
        {
            title: "magu wachinje",
            duration: "00:36:14",
            views: "1.4 k",
            likes: "1M",
            like: 1,
        },
        {
            title: "my life",
            duration: "00:30:34",
            views: "3m",
            likes: "2.1k",
            like: 0,
        },
    ];

    images: any[];
    offlineLoading: any;
    public played: any;

    searchQuery: string = '';
    constructor(
        private modalCtrl: ModalController,
        public navCtrl: NavController,
        private dataService: Data,
        public http: Http,
        Loading: LoadingController,
        params: NavParams
    ) {

        this.played = false;
        this.initializedata();

        this.offlineLoading = Loading.create({
            content: 'changing to offline, Please Wait...',
            duration: 5000
        });

        let loading = Loading.create({
            content: 'loading, Please Wait...',
            duration: 1000
        });




        loading.present()
        this.http.get('http://crisskimaryo.pythonanywhere.com/sb_api1/books/')
            .map(res => res.json())
            .subscribe(
            data => {
                this.images = data;
                console.log(this.images)
            },
            err => {
                loading.dismiss()
                this.offlinedata()
                console.log(err);
            },
            () => {

            }

            );

    }

    offlinedata() {


        this.offlineLoading.present()
        this.http.get('assets/mocks/offlinedata.json')
            .map(res => res.json())
            .subscribe(
            data => {
                this.images = data;
                console.log(this.images)
                // this.offlineLoading.dismiss()
            },
            err => {

                console.log(err);
                this.offlineLoading.dismiss()
            },
            () => {

            }

            );

    }


    initializedata() {
        this.images
    }

    getItems(ev: any) {
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




// swipe directions

// DIRECTION_NONE         1
// DIRECTION_LEFT         2
// DIRECTION_RIGHT        4
// DIRECTION_UP           8
// DIRECTION_DOWN         16
// DIRECTION_HORIZONTAL   6
// DIRECTION_VERTICAL     24
// DIRECTION_ALL          30

    swipe(e) {
        let modal = this.modalCtrl.create(PlayerPage);
        modal.present();
        this.played = false;
        console.log("swiped")
        if (e.direction == 8) {
        console.log("swiped"+ e.direction);
    }
    }
    listenplay(lis) {
        this.played = true;
        this.played = lis;
        console.log(this.played)
        console.log("playing :" + "  " + lis.title + ", Duration: " + lis.duration);
    }

    navstry(img) {


        let book = this.images.filter(
            images => images.id === img.id);

        this.navCtrl.push(ToreadPage, { data: book, img })
        console.log(book)
    }
    listennav(img) {
        let listen = this.images.filter(
            images => images.id === img.id);

        this.navCtrl.push(TolistenPage, { data: listen, img })
        console.log(img)
    }
    liked(img) {
        if (img.like) {
            img.like = false;
            img.n_likes--;
        }

        else {
            img.like = true;

            img.n_likes++;

        }



    }

}
