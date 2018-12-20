import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import firebase from 'firebase/app';

import {TabsPage} from "../tabs/tabs";
import {SigninPage} from "../signin/signin";
import {ImageUploadPage} from '../image-upload/image-upload';

import {Camera} from '@ionic-native/camera';

import {AlertController} from 'ionic-angular';

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
    userdata: any = {};
    userPseudo: any;
    userImage: any;
    user: any = firebase.auth().currentUser;
    userid: any;
    base64Image: any;
    imgPreview: any = 'https://time2hack.com/favicon.png';
    userPhoto: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public camera: Camera, private alertCtrl: AlertController) {
    }

    presentAlert() {
        let alert = this.alertCtrl.create({
            title: 'Bienvenue',
            subTitle: 'Félicitations ! Vous êtes inscrit sur TweetDuck, vous pouvez dès ' +
                'maintenant choisir une image de profil et découvrir le monde en temps réel.',
            buttons: [
                {
                text: 'OK',
                handler: () => {
                    this.showImageChooseModal()
                }
            }]
        });
        alert.present();
    }

    gotoHome() {
        this.navCtrl.setRoot(TabsPage)
    }

    gotoSignIn() {
        this.navCtrl.setRoot(SigninPage);
    }

    getImage(uid: String): void { //permet de sélectionner une image dans la galerie photo de son téléphone... mais il n'y a pour l'instant rien derrière
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 100,
            encodingType: this.camera.EncodingType.JPEG,
        }).then((imageData) => {
            this.base64Image = 'data:image/jpeg;base64,' + imageData;
            this.imgPreview = this.base64Image;
            var img = document.getElementById('user_image');
            img.setAttribute('src', this.base64Image);

            this.userPhoto = imageData;

            //this.uploadImage();

        }, (err) => {
            console.log(err);
        });
    }

    signUp() {
        //On récupère les 2 valeurs username du formulaire de création d'utilisateur
        let username = this.userPseudo;

        firebase.auth().createUserWithEmailAndPassword(this.userdata.email, this.userdata.password).then(function (res) {
            firebase.auth().currentUser.updateProfile({
                displayName: username,
                photoURL: 'https://time2hack.com/favicon.png'
            });
            console.log('Signup OK', res);
        }).catch(function (error) {
        });

        //this.uploadImage();
        this.presentAlert();
    }

    showImageChooseModal(){
        const modal = this.modalCtrl.create(ImageUploadPage);
        modal.present();
    }

    uploadImage() {
        let username = this.userPseudo;
        var storage = firebase.storage().ref('users/');
        //this.userid = this.user.uid;

        storage.child('user-' + this.userImage + '.jpg').putString(this.userPhoto, 'base64', {contentType: 'image/jpg'})
            .then((savedPicture) => {
                savedPicture.ref.getDownloadURL().then(function (downloadURL) {
                    let userimg = downloadURL;
                    firebase.auth().currentUser.updateProfile({
                        displayName: username,
                        photoURL: userimg
                    });
                });
            }).catch((err) => {
            var pet = document.getElementById('pet');
            //pet.innerHTML = err;
            for (var property in err) {
                pet.innerHTML += property + ': ' + err[property] + '; <br>';
            }
        })
    }

}
