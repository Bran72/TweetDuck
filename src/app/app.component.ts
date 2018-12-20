import { Component } from '@angular/core';
import {NavController, Platform, App} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { IntroPage } from '../pages/intro/intro';
import {SigninPage} from "../pages/signin/signin";
import { AngularFireAuth } from '@angular/fire/auth';

import firebase from 'firebase/app';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = TabsPage;
  rootPage:any = IntroPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              public appCtrl: App,
              private afAuth: AngularFireAuth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      //statusBar.overlaysWebView(false);
      //statusBar.backgroundColorByHexString('#ffffff');
      //statusBar.backgroundColorByName('white');
      splashScreen.hide();

        afAuth.authState.subscribe(user => {
            if (!user) {
                this.appCtrl.getRootNav().setRoot(IntroPage);
                return;
            }else{


            //console.log(user);
            this.appCtrl.getRootNav().setRoot(TabsPage,
                {'username':user.displayName, 'email':user.email});
            }
        });
    });
  }
}
