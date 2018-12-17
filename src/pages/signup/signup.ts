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
  userPseudo:any;
  userImage:any;
  user: any = firebase.auth().currentUser;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


  gotoHome() {
    this.navCtrl.setRoot(TabsPage)
  }

  gotoSignIn(){
    this.navCtrl.setRoot(SigninPage);
  }

    changeListener($event) : void {
        this.userImage = $event.target.files[0].name;
        console.log(this.userImage);
    }


  signUp(){
      let username = this.userPseudo;
      let userimage = this.userImage;
      console.log(username);
      console.log(userimage);
    //this.navCtrl.setRoot(SignupPage);
      firebase.auth().createUserWithEmailAndPassword(this.userdata.email, this.userdata.password)
          .then(function(res) {
              firebase.auth().currentUser.updateProfile({
                  displayName: username,
                  photoURL: 'https://time2hack.com/favicon.png'
              });
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
