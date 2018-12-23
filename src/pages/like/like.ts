import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {AngularFireAuth} from '@angular/fire/auth'
import {AngularFireDatabase} from '@angular/fire/database';

/**
 * Generated class for the LikePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-like',
    templateUrl: 'like.html',
})
export class LikePage {
    tweetKey: any;
    items: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public db: AngularFireDatabase, private afAuth: AngularFireAuth) {
        this.tweetKey = navParams.get('key');
        this.items = db.list('tweets/' + this.tweetKey + '/likes').valueChanges();
        console.log(this.items);
    }

    addLike() {
        this.afAuth.authState.subscribe(user => {
            this.db.list('tweets/' + this.tweetKey + '/likes').push({
                user_name: user.displayName,
                user_avatar: user.photoURL
            })
        })
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LikePage');
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
