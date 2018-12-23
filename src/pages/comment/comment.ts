import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController, ModalController} from 'ionic-angular';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {NewcommentPage} from "../newcomment/newcomment";

//import {el} from "@angular/platform-browser/testing/src/browser_util";
/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-comment',
    templateUrl: 'comment.html',
})
export class CommentPage {

    commentData: any = {};
    items: any;
    commentsRef: any;
    tweet: any;
    tweetKey: any;
    date: any;

    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, public viewCtrl: ViewController, public db: AngularFireDatabase, private afAuth: AngularFireAuth) {
        this.tweetKey = navParams.get('key');
        this.commentsRef = db.list('tweets/');
        this.items = db.list('tweets/' + this.tweetKey + '/comments').valueChanges();
        this.tweet = navParams.get('tweet');
        console.log('cc la mifa', this.tweet);
        console.log('tweetKey?', this.tweetKey)
    }

    createComment() {
        this.afAuth.authState.subscribe(user => {
            if (this.commentData.content) {
                this.date = new Date().toISOString();
                // this.comments.push({
                //     'name': user.displayName,
                //     'message': this.commentData.content,
                //     'date': this.date
                //
                // });
                this.db.list('tweets/' + this.tweetKey + '/comments').push({
                    user: user.displayName,
                    avatar: user.photoURL,
                    date: this.date,
                    comment: this.commentData.content
                })
            }
            //this.viewCtrl.dismiss();
        })
    }


    dismiss() {
        this.viewCtrl.dismiss();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CommentPage');
    }

    presentAddComment() {
        const modal = this.modalCtrl.create(NewcommentPage, {tweet: this.tweet, key: this.tweetKey});
        modal.present();
    }

}
