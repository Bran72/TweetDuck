import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

/**
 * Generated class for the NewtweetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newtweet',
  templateUrl: 'newtweet.html',
})
export class NewtweetPage {
  tweetData:any = {};
  newTweet:any;
  date:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private afAuth: AngularFireAuth, public db: AngularFireDatabase) {
  }

    createTweet(){
    this.afAuth.authState.subscribe(user=>{
        if(this.tweetData.content){
            this.newTweet = this.db.list('tweets');
            this.date = new Date().toISOString();
            this.newTweet.push({'tweet_user':user.email, 'tweet': this.tweetData.content, 'date':this.date});
            this.viewCtrl.dismiss();
        }
    });
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad NewtweetPage');
    }

}
