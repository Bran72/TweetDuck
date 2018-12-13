import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';

import firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { TabsPage } from "../tabs/tabs";

import { SignupPage } from "../signup/signup";

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
    items: Observable<any[]>;
    list: any;
    userdata:any = {};
    error ='';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              afDB: AngularFireDatabase) {
      //his.items = afDB.list('users').valueChanges();
  }

  gotoHome() {
    this.navCtrl.setRoot(TabsPage)
  }

  signIn(){
    console.log(this.userdata);
    let self = this;
      firebase.auth().signInWithEmailAndPassword(this.userdata.email, this.userdata.password)
          .then(function(res) {
              console.log('Signin OK', res);
              self.navCtrl.setRoot(TabsPage)
          })
          .catch(function(error) {
              // Handle Errors here.
              self.error = error.message;
              // ...
          });
  }

  gotoSignUp(){
    this.navCtrl.setRoot(SignupPage);
  }

}
