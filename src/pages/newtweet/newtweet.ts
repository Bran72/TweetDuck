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
            //console.log(user.displayName);
            this.newTweet.push({'tweet_user_id':user.uid, 'tweet_user_img':user.photoURL, 'tweet_user':user.displayName, 'tweet': this.tweetData.content, 'date':this.date});

            /*var tweetPush = this.newTweet.push({'tweet_user_id':user.uid, 'tweet_user_img':user.photoURL, 'tweet_user':user.displayName, 'tweet': this.tweetData.content, 'date':this.date});
            var tweetID = tweetPush.key;
            console.log(tweetID);*/
            /*ref.on("value", function (snapshot) {
                console.log('snapshot !!!!!!!!!!!!!!! ');
                console.log(snapshot);
            });*/
            //this.viewCtrl.dismiss();


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
