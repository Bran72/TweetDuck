import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ActionSheetController, Platform, ModalController} from 'ionic-angular';

import {HomePage} from "../home/home";
import firebase from "firebase";
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import {SigninPage} from "../signin/signin";
import {IntroPage} from "../intro/intro";
import {ImageUploadPage} from '../image-upload/image-upload';
import {TabsPage} from "../tabs/tabs";
import {UserImagePage} from "../user-image/user-image";
import {map} from "rxjs/operators";

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
    usermail: any;
    displayName: any;
    userImg: any;
    storageRef: any;
    file: any;
    userCrea: any;
    userId: any;
    items;
    tweetsByUser;
    src: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public modalCtrl: ModalController, public actionsheetCtrl: ActionSheetController,
                private afAuth: AngularFireAuth, db: AngularFireDatabase) {
        this.usermail = this.user.email; //get the user's email
        this.displayName = this.user.displayName; //get the user's pseudo
        this.userCrea = this.user.metadata;
        this.userImg = this.user.photoURL; //get the user's image
        this.userId = this.user.uid;


        afAuth.authState.subscribe(user => {
            if (!user) { //S'il n'est pas connecté, celui-ci est retourné sur la page Root
                this.navCtrl.setRoot(SigninPage);
                return;
            }
            //this.items = db.list('tweets').valueChanges();
            this.items = firebase.database().ref('tweets/');
            //this.items = db.list(`tweets/${this.userID}`).valueChanges();
            console.log(this.items);
        });

        //this.tweetsByUser = db.list('tweets_by_user/'+this.userId).valueChanges();
        this.tweetsByUser = db.list('tweets_by_user/' + this.userId).snapshotChanges()
            .pipe(map(changes => {
                return changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
            }));


        //Pour récupérer une image dans le FireBase Storage
        var storage = firebase.storage().ref('users/');
        var pathStorage;
        storage.child('user-.jpg').getDownloadURL().then(function (url) {
            /*
            //Pour télécharger le fichier
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = function(event) {
                var blob = xhr.response;
            };
            xhr.open('GET', url);
            xhr.send();*/

            //On insère l'image dans un attribut src d'une balise <img>
            var img = document.getElementById('user_image');
            img.setAttribute('src', url);
        }).catch(function (error) {
        });
    }

    changeListener($event): void {
        this.file = $event.target.files[0];
        console.log(this.file);
    }

    logOut() {
        firebase.auth().signOut().then(function () {
            //firebase.auth().getRedirectResult();
        }, function (error) {
        });

        setTimeout(() => {
            const modal = this.modalCtrl.create(IntroPage);
            modal.present();
            //this.navCtrl.push(IntroPage);
        }, 500);
    }

    imageProfil() {
        const modal = this.modalCtrl.create(UserImagePage);
        modal.present();
        //this.navCtrl.push(UserImagePage);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ProfilePage');
    }

}
