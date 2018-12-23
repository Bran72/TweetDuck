import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';

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
  tweetKey: any;
  date: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.tweet = navParams.get('tweet');
    this.tweetKey = navParams.get('key');
    console.log('this.tweet', this.tweetKey)
  }

  createComment() {
    this.afAuth.authState.subscribe(user => {
      if(this.commentData.content) {
        this.date = new Date().toISOString();
        // this.comments.push({
        //     'name': user.displayName,
        //     'message': this.commentData.content,
        //     'date': this.date
        //
        // });
        this.db.list('tweets/'+ this.tweetKey + '/comments').push({
            user: user.displayName,
            avatar: user.photoURL,
            date: this.date,
            comment: this.commentData.content
        })
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
