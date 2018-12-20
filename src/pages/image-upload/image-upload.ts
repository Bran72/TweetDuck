import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import firebase from 'firebase/app';

import {TabsPage} from "../tabs/tabs";

import {Camera} from '@ionic-native/camera';
import {HomePage} from "../home/home";

/**
 * Generated class for the ImageUploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-image-upload',
    templateUrl: 'image-upload.html',
})
export class ImageUploadPage {
    user: any = firebase.auth().currentUser;
    base64Image: any;
    userImage: any;
    userID: any;
    imgPreview: any = 'https://time2hack.com/favicon.png';
    userPhoto: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera) {
        this.userID = this.user.uid;
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

    uploadImage() {
        let username = this.user.displayName;
        var storage = firebase.storage().ref('users/');
        //this.userid = this.user.uid;

        storage.child('user-' + this.userID + '.jpg').putString(this.userPhoto, 'base64', {contentType: 'image/jpg'})
            .then((savedPicture) => {
                savedPicture.ref.getDownloadURL().then(function (downloadURL) {
                    let userimg = downloadURL;
                    firebase.auth().currentUser.updateProfile({
                        displayName: username,
                        photoURL: userimg
                    });
                });
                this.navCtrl.setRoot(TabsPage);
            }).catch((err) => {
            var pet = document.getElementById('pet');
            //pet.innerHTML = err;
            for (var property in err) {
                pet.innerHTML += property + ': ' + err[property] + '; <br>';
            }
        });

        //this.navCtrl.setRoot(TabsPage);
        //this.navCtrl.setRoot(HomePage);
    }

    addUserProfil() {
        this.uploadImage();
    }

    noPhoto() {
        this.navCtrl.setRoot(TabsPage)
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ImageUploadPage');
    }

}
