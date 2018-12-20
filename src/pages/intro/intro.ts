import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {SignupPage} from "../signup/signup";
import {SigninPage} from "../signin/signin";

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {
  }

  gotoSignUp(){
      this.navCtrl.push(SignupPage);
  }

  gotoSignIn(){
      const modal = this.modalCtrl.create(SigninPage);
      modal.present();
  }

    presentAddTweet() {
        const modal = this.modalCtrl.create(SigninPage);
        modal.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

}
