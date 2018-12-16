import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase/app';
import { TabsPage } from "../tabs/tabs";

import { SigninPage } from "../signin/signin";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  userdata:any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoHome() {
    this.navCtrl.setRoot(TabsPage)
  }

  gotoSignIn(){
    this.navCtrl.setRoot(SigninPage);
  }

  signUp(){
    //this.navCtrl.setRoot(SignupPage);
      firebase.auth().createUserWithEmailAndPassword(this.userdata.email, this.userdata.password)
          .then(function(res) {
            console.log('Signup OK', res);
          })
          .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
      });
  }

}
