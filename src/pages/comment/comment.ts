import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import {el} from "@angular/platform-browser/testing/src/browser_util";
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

    items: any;
    commentsRef:any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, db: AngularFireDatabase) {
        /*const items = [
            {'name': 'AnotherName1', message: 'Un commentaire1. '},
            {'name': 'AnotherName2', message: 'Un commentaire2.'},
            {'name': 'AnotherName3', message: 'Et pourquoi pas un commentaire3.'}
        ];*/

        this.commentsRef = db.list('comments');
        this.items = db.list('comments').valueChanges();


        //this.commentsRef.push({'name': 'AnotherName19789809', message: 'Un commentaire1000987787. ', 'tweet_id':2});
        //this.commentsRef.push({'name': 'AnotherName2', message: 'Un commentaire2. ', 'tweet_id':3});

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CommentPage');
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
