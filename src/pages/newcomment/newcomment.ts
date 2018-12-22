import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';

/**
 * Generated class for the NewcommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newcomment',
  templateUrl: 'newcomment.html',
})
export class NewcommentPage {
  commentData: any = {};
  comments: any;
  tweet: any;
  tweetID: any;
  userID: any;
  date: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.tweet = navParams.get('tweet');
    this.userID = firebase.auth().currentUser.uid;
    this.tweetID =
    console.log('tweetID', this.tweet)
  }

  createComment() {
    this.afAuth.authState.subscribe(user => {
      var user_id = this.userID;
      if(this.commentData.content) {
        this.comments = this.db.list("comments/");
        this.date = new Date().toISOString();
        console.log('tweeeet', this.comments)
        this.comments.push({
            'name': user.displayName,
            'message': this.commentData.content,
            'date': this.date

        });

      }
      this.viewCtrl.dismiss();
    })

  }

  dismiss() {
    this.viewCtrl.dismiss();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewcommentPage');
  }

}
