import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';
import { IonicStorageModule } from "@ionic/storage";

import { HomePage } from "../home/home";
import firebase from "firebase";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
    user: any = firebase.auth().currentUser;
    //file:any = e.target.files[0];
    usermail:any;
    displayName:any;
    userImg:any;
    storageRef:any;
    file:any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public actionsheetCtrl:  ActionSheetController,
                private afAuth: AngularFireAuth, db: AngularFireDatabase) {
      this.usermail = this.user.email; //get the user's email
      this.displayName = this.user.displayName; //get the user's pseudo
      this.userImg = this.user.photoURL; //get the user's image
      /*firebase.auth().currentUser.updateProfile({
          displayName: 'Brandon',
          photoURL: 'https://time2hack.com/favicon.png'
      });*/
      console.log(this.user);

  }

  changeListener($event) : void {
      this.file = $event.target.files[0];
      console.log(this.file);
  }
  updateFile() {
      let name = this.file;
      console.log(name);
  }

  gotoHome() {
      /*firebase.auth().currentUser.updateProfile({
          displayName: 'Brandon',
          photoURL: 'https://time2hack.com/favicon.png'
      });*/
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad ProfilePage');
  }

}
