import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ComponentsModule} from '../components/components.module';
import {DirectivesModule} from '../directives/directives.module';
import {HttpClientModule} from '@angular/common/http';
import {PipesModule} from '../pipes/pipes.module';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from '../app/app.component';

import {IntroPage} from '../pages/intro/intro';
import {HomePage} from '../pages/home/home';
import {ProfilePage} from "../pages/profile/profile";
import {LoginPage} from "../pages/login/login";
import {ModalPage} from '../pages/modal/modal';
import {TabsPage} from '../pages/tabs/tabs';
import {NewtweetPage} from '../pages/newtweet/newtweet';
import {NewcommentPage} from '../pages/newcomment/newcomment';
import {LikePage} from '../pages/like/like';
import {CommentPage} from '../pages/comment/comment';
import {ImageUploadPage} from '../pages/image-upload/image-upload';
import {UserImagePage} from '../pages/user-image/user-image';

import {SigninPage} from "../pages/signin/signin";
import {SignupPage} from "../pages/signup/signup";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {ImagePicker} from '@ionic-native/image-picker';
import {Base64} from '@ionic-native/base64';

import {Camera} from '@ionic-native/camera';


//import { TransactionComponent } from '../components/transaction/transaction';

// On importe ici tous les éléments nécessaires au fonctionnement de Firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule, AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyAq_jIP4SCaHtR07MfALT4tWAqVbYf8mSg",
    authDomain: "duckcoin-75b4f.firebaseapp.com",
    databaseURL: "https://duckcoin-75b4f.firebaseio.com",
    projectId: "duckcoin-75b4f",
    storageBucket: "duckcoin-75b4f.appspot.com",
    messagingSenderId: "572695404930"
};
import firebase from 'firebase/app';

firebase.initializeApp(firebaseConfig);

@NgModule({
    declarations: [
        MyApp,
        IntroPage,
        HomePage,
        ProfilePage,
        LoginPage,
        SigninPage,
        SignupPage,
        ModalPage,
        CommentPage,
        NewcommentPage,
        LikePage,
        NewtweetPage,
        ImageUploadPage,
        UserImagePage,
        TabsPage
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ComponentsModule,
        DirectivesModule,
        PipesModule,
        IonicModule.forRoot(MyApp, {
            // tabsPlacement: 'top',
            backButtonText: 'Retour'
        }),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        IntroPage,
        HomePage,
        ModalPage,
        ProfilePage,
        LoginPage,
        SigninPage,
        SignupPage,
        CommentPage,
        NewcommentPage,
        LikePage,
        TabsPage,
        ImageUploadPage,
        UserImagePage,
        NewtweetPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        AngularFireDatabase,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ImagePicker,
        Base64,
        Camera
    ]
})
export class AppModule {
}
