import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController, AlertController} from 'ionic-angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import * as firebase from "firebase";
import {TabsPage} from "../tabs/tabs";
import {Camera} from "@ionic-native/camera";

/**
 * Generated class for the NewtweetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-newtweet',
    templateUrl: 'newtweet.html',
})
export class NewtweetPage {
    tweetData: any = {};
    user: any = firebase.auth().currentUser;
    //newTweet:any;
    tweets: any;
    tweetsByUser: any;
    date: any;
    base64Image: any;
    userID: any;
    userImg: any;
    imgPreview: any;
    tweetPhoto: any = '';
    tweetPhotoUrl:any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private afAuth: AngularFireAuth,
                public camera: Camera, public db: AngularFireDatabase, private alertCtrl: AlertController) {
        this.userID = firebase.auth().currentUser.uid;
        this.userImg = firebase.auth().currentUser.photoURL;
    }

    getImage(uid: String): void { //permet de sélectionner une image dans la galerie photo de son téléphone
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 30,
            encodingType: this.camera.EncodingType.JPEG,
        }).then((imageData) => {
            this.base64Image = 'data:image/jpeg;base64,' + imageData;
            this.imgPreview = this.base64Image;
            var img = document.getElementById('tweet_image');
            img.setAttribute('src', this.base64Image);

            this.tweetPhoto = this.dataURItoBlob('data:image/jpeg;base64,'+imageData);

        }, (err) => {
            console.log(err);
        });
    }

    dataURItoBlob(dataURI) {
        // code adapted from: http://stackoverflow.com/questions/33486352/cant-upload-image-to-aws-s3-from-ionic-camera
        let binary = atob(dataURI.split(',')[1]);
        let array = [];
        for (let i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
    };


    createTweet() {
        this.afAuth.authState.subscribe(user => {
            var user_id = this.userID;
            if (this.tweetData.content) {
                /*
                //this.newTweet = this.db.list('tweets');
                //this.date = new Date().toISOString();
                //console.log(user.displayName);
                //this.newTweet.push({'tweet_user_id':user.uid, 'tweet_user_img':user.photoURL, 'tweet_user':user.displayName, 'tweet': this.tweetData.content, 'date':this.date});

                /*var tweetPush = this.newTweet.push({'tweet_user_id':user.uid, 'tweet_user_img':user.photoURL, 'tweet_user':user.displayName, 'tweet': this.tweetData.content, 'date':this.date});
                var tweetID = tweetPush.key;
                console.log(tweetID);*/
                /*ref.on("value", function (snapshot) {
                    console.log('snapshot !!!!!!!!!!!!!!! ');
                    console.log(snapshot);
                });*/
                //this.viewCtrl.dismiss();
                /*this.tweets = this.db.list('tweets/'+user_id);
                this.date = new Date().toISOString();
                this.tweets.push({'content': this.tweetData.content, 'tweet_date': this.date});*/
                /*firebase.database().ref('tweets/'+user_id).once('value').then(function(snapshot) {
                    snapshot.ref.update({'content': tweet_content, 'prenom': 'Brandon', 'pseudo': 'brandonle'});
                });*/


                if (this.tweetPhoto != '') {
                    /*this.date = new Date().toISOString();

                    var storage = firebase.storage().ref().child('tweets/toto.jpg');
                    var upload = storage.put(this.tweetPhoto).then(snapshot=>{
                        var test = snapshot.downloadURL;

                        let alert = this.alertCtrl.create({
                            title: 'Snapshot',
                            subTitle: test,
                            buttons: ['Dismiss']
                        });
                        alert.present();
                    });*/



                    //upload.then(this.onSuccess, this.onError);


                    //setTimeout(()=>{
                    /*this.db.list('tweets/').push({
                        'tweet_user_id': user.uid,
                        'tweet_user_img': user.photoURL,
                        'tweet_user': user.displayName,
                        'tweet': this.tweetData.content,
                        'tweet_photo':'',
                        'date': this.date})*/
                    //}, 5000)




                    //let tweet_1 = this.tweets.getKey();

                    //this.tweets = this.db.list('tweets/');
                    /*var tweet1 = this.db.list('tweets_by_user/' + user_id);
                        this.tweets.push({
                            'tweet_user_id': user.uid,
                            'tweet_user_img': user.photoURL,
                            'tweet_user': user.displayName,
                            'tweet': this.tweetData.content,
                            'tweet_photo':this.tweetPhotoUrl,
                            'date': this.date
                        });
                        /*this.tweetsByUser.push({
                            'tweet_user_id': user.uid,
                            'tweet_user_img': user.photoURL,
                            'tweet_user': user.displayName,
                            'tweet': this.tweetData.content,
                            'tweet_photo':this.tweetPhotoUrl,
                            'date': this.date
                        });

                        this.viewCtrl.dismiss();*/

                }else{
                    this.tweets = this.db.list('tweets/');
                    this.tweetsByUser = this.db.list('tweets_by_user/' + user_id);
                    this.date = new Date().toISOString();
                    this.tweets.push({
                        'tweet_user_id': user.uid,
                        'tweet_user_img': user.photoURL,
                        'tweet_user': user.displayName,
                        'tweet': this.tweetData.content,
                        'tweet_photo':'',
                        'date': this.date
                    });
                    this.tweetsByUser.push({
                        'tweet_user_id': user.uid,
                        'tweet_user_img': user.photoURL,
                        'tweet_user': user.displayName,
                        'tweet': this.tweetData.content,
                        'tweet_photo':'',
                        'date': this.date
                    });

                    this.viewCtrl.dismiss();
                }
            }
        });
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    onSuccess = snapshot => {
        this.tweetPhotoUrl = snapshot.getDownloadURL();
        console.log('I think IT WORKKKKSSSSSS I THINK I THINK MAYBE BITCH I\'M BELLE THORNE')
    };

    onError = error => {
        this.tweetPhotoUrl = 'error';

        console.log("EERRRROOOOOOORRRRRRR !!!!!!!! --> ", error);
    };

    uploadImage() {
        let username = this.user.displayName;
        var storage = firebase.storage().ref('tweets/');
        storage.child('user-' + this.userID + '.jpg').putString(this.tweetPhoto, 'base64', {contentType: 'image/jpg'})
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
        console.log('ionViewDidLoad NewtweetPage');
    }

}
