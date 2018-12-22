webpackJsonp([10],{

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newcomment_newcomment__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import {el} from "@angular/platform-browser/testing/src/browser_util";
/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommentPage = /** @class */ (function () {
    function CommentPage(navCtrl, modalCtrl, navParams, viewCtrl, db) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        /*const items = [
            {'name': 'AnotherName1', message: 'Un commentaire1. '},
            {'name': 'AnotherName2', message: 'Un commentaire2.'},
            {'name': 'AnotherName3', message: 'Et pourquoi pas un commentaire3.'}
        ];*/
        this.tweetKey = navParams.get('key');
        this.commentsRef = db.list('tweets/');
        this.items = db.list('tweets/' + this.tweetKey + '/comments').valueChanges();
        this.tweet = navParams.get('tweet');
        console.log('cc la mifa', this.tweet);
        console.log('tweetKey?', this.tweetKey);
        //this.commentsRef.push({'name': 'AnotherName19789809', message: 'Un commentaire1000987787. ', 'tweet_id':2});
        //this.commentsRef.push({'name': 'AnotherName2', message: 'Un commentaire2. ', 'tweet_id':3});
    }
    CommentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CommentPage');
    };
    CommentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CommentPage.prototype.presentAddComment = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__newcomment_newcomment__["a" /* NewcommentPage */], { tweet: this.tweet, key: this.tweetKey });
        modal.present();
    };
    CommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comment',template:/*ion-inline-start:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/comment/comment.html"*/'<!--\n  Generated template for the CommentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Commentaires\n        </ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n                <span ion-text color="primary" showWhen="ios"><ion-icon name="arrow-back"></ion-icon></span>\n                <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding>\n    <ion-list>\n        <ion-item *ngFor="let item of items | async">\n            <ion-avatar item-start>\n                <img src="../../assets/imgs/logo.png">\n            </ion-avatar>\n            <h2>{{item.user}}</h2>\n            <p>{{item.comment}}</p>\n          <p class="tweet_date">{{item.date | date: \'dd/MM/yyyy à H:mm\'}}</p>\n        </ion-item>\n    </ion-list>\n    <ion-fab bottom right style="font-size: 18px;"><button (click)="presentAddComment()" style="font-size: 24px; background: blue">+</button></ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/comment/comment.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]) === "function" && _e || Object])
    ], CommentPage);
    return CommentPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewcommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NewcommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewcommentPage = /** @class */ (function () {
    function NewcommentPage(navCtrl, navParams, viewCtrl, db, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.afAuth = afAuth;
        this.commentData = {};
        this.tweet = navParams.get('tweet');
        this.tweetKey = navParams.get('key');
        console.log('this.tweet', this.tweetKey);
    }
    NewcommentPage.prototype.createComment = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (user) {
            if (_this.commentData.content) {
                _this.date = new Date().toISOString();
                // this.comments.push({
                //     'name': user.displayName,
                //     'message': this.commentData.content,
                //     'date': this.date
                //
                // });
                _this.db.list('tweets/' + _this.tweetKey + '/comments').push({
                    user: user.displayName,
                    date: _this.date,
                    comment: _this.commentData.content
                });
            }
            _this.viewCtrl.dismiss();
        });
    };
    NewcommentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NewcommentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewcommentPage');
    };
    NewcommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newcomment',template:/*ion-inline-start:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/newcomment/newcomment.html"*/'<!--\n  Generated template for the NewtweetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Répondre à ce Dweet\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios"><ion-icon name="arrow-back"></ion-icon></span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!--<ion-textarea placeholder="Dweecker quelque chose..." [(ngModel)]="tweetData.content"></ion-textarea>-->\n  <ion-textarea placeholder="Répondre à ce Dweet" [(ngModel)]="commentData.content"></ion-textarea>\n  <button ion-button round (click)="createComment()" class="create_tweet next_button-btn">\n    <span ion-text>Répondre</span>\n  </button>\n<!--  <button ion-button round (click)="createTweet()">\n    <span ion-text>Tweeter</span>\n  </button>-->\n</ion-content>\n'/*ion-inline-end:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/newcomment/newcomment.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */]) === "function" && _e || Object])
    ], NewcommentPage);
    return NewcommentPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=newcomment.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LikePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LikePage = /** @class */ (function () {
    function LikePage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.items = [
            { 'name': 'AnotherName1' },
            { 'name': 'AnotherName2' },
            { 'name': 'AnotherName3' },
            { 'name': 'AnotherName4' },
        ];
    }
    LikePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LikePage');
    };
    LikePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LikePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-like',template:/*ion-inline-start:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/like/like.html"*/'<!--\n  Generated template for the LikePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-toolbar>\n		<ion-buttons start>\n			<button ion-button (click)="dismiss()">\n				<span ion-text color="primary" showWhen="ios"><ion-icon name="arrow-back"></ion-icon></span>\n				<ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n			</button>\n		</ion-buttons>\n		<ion-title>Mentions "J\'aime"</ion-title>\n	</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-list>\n 		 <ion-item *ngFor="let item of items">\n    		<ion-avatar item-start>\n      			<img src="../../assets/imgs/logo.png">\n    		</ion-avatar>\n    		<h2>{{item.name}}</h2>\n  		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/like/like.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], LikePage);
    return LikePage;
}());

//# sourceMappingURL=like.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewtweetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the NewtweetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewtweetPage = /** @class */ (function () {
    function NewtweetPage(navCtrl, navParams, viewCtrl, afAuth, camera, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.afAuth = afAuth;
        this.camera = camera;
        this.db = db;
        this.tweetData = {};
        this.user = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser;
        this.tweetPhoto = '';
        this.onSuccess = function (snapshot) {
            _this.tweetPhotoUrl = snapshot.getDownloadURL();
            console.log('I think IT WORKKKKSSSSSS I THINK I THINK MAYBE BITCH I\'M BELLE THORNE');
        };
        this.onError = function (error) {
            _this.tweetPhotoUrl = 'error';
            console.log("EERRRROOOOOOORRRRRRR !!!!!!!! --> ", error);
        };
        this.userID = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.uid;
        this.userImg = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.photoURL;
    }
    NewtweetPage.prototype.getImage = function (uid) {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 30,
            encodingType: this.camera.EncodingType.JPEG,
        }).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.imgPreview = _this.base64Image;
            var img = document.getElementById('tweet_image');
            img.setAttribute('src', _this.base64Image);
            _this.tweetPhoto = _this.dataURItoBlob('data:image/jpeg;base64,' + imageData);
        }, function (err) {
            console.log(err);
        });
    };
    NewtweetPage.prototype.dataURItoBlob = function (dataURI) {
        // code adapted from: http://stackoverflow.com/questions/33486352/cant-upload-image-to-aws-s3-from-ionic-camera
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    };
    ;
    NewtweetPage.prototype.createTweet = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (user) {
            var user_id = _this.userID;
            if (_this.tweetData.content) {
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
                if (_this.tweetPhoto != '') {
                    _this.date = new Date().toISOString();
                    var storage = __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref().child('tweets/toto.jpg');
                    var upload = storage.put(_this.tweetPhoto);
                    //upload.then(this.onSuccess, this.onError);
                    upload.then(function (snapshot) {
                        _this.tweetPhotoUrl = snapshot.downloadURL;
                    });
                    setTimeout(function () {
                        _this.db.list('tweets/').push({
                            'tweet_user_id': user.uid,
                            'tweet_user_img': user.photoURL,
                            'tweet_user': user.displayName,
                            'tweet': _this.tweetData.content,
                            'tweet_photo': _this.tweetPhotoUrl,
                            'date': _this.date
                        });
                    }, 5000);
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
                }
                else {
                    _this.tweets = _this.db.list('tweets/');
                    _this.tweetsByUser = _this.db.list('tweets_by_user/' + user_id);
                    _this.date = new Date().toISOString();
                    _this.tweets.push({
                        'tweet_user_id': user.uid,
                        'tweet_user_img': user.photoURL,
                        'tweet_user': user.displayName,
                        'tweet': _this.tweetData.content,
                        'tweet_photo': '',
                        'date': _this.date
                    });
                    _this.tweetsByUser.push({
                        'tweet_user_id': user.uid,
                        'tweet_user_img': user.photoURL,
                        'tweet_user': user.displayName,
                        'tweet': _this.tweetData.content,
                        'tweet_photo': '',
                        'date': _this.date
                    });
                    _this.viewCtrl.dismiss();
                }
            }
        });
    };
    NewtweetPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NewtweetPage.prototype.uploadImage = function () {
        var _this = this;
        var username = this.user.displayName;
        var storage = __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref('tweets/');
        storage.child('user-' + this.userID + '.jpg').putString(this.tweetPhoto, 'base64', { contentType: 'image/jpg' })
            .then(function (savedPicture) {
            savedPicture.ref.getDownloadURL().then(function (downloadURL) {
                var userimg = downloadURL;
                __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.updateProfile({
                    displayName: username,
                    photoURL: userimg
                });
            });
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
        }).catch(function (err) {
            var pet = document.getElementById('pet');
            //pet.innerHTML = err;
            for (var property in err) {
                pet.innerHTML += property + ': ' + err[property] + '; <br>';
            }
        });
        //this.navCtrl.setRoot(TabsPage);
        //this.navCtrl.setRoot(HomePage);
    };
    NewtweetPage.prototype.addUserProfil = function () {
        this.uploadImage();
    };
    NewtweetPage.prototype.noPhoto = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
    };
    NewtweetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewtweetPage');
    };
    NewtweetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newtweet',template:/*ion-inline-start:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/newtweet/newtweet.html"*/'<!--\n  Generated template for the NewtweetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios"><ion-icon name="close"></ion-icon></span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <span class="tweet_info">\n    <img style="display: inline-block" src="{{userImg}}">\n  </span>\n  <span class="tweet_info_user">\n    <ion-textarea placeholder="Dweecker quelque chose..." [(ngModel)]="tweetData.content"></ion-textarea>\n  </span>\n\n  <img src="javascript:void(0)" alt="" id="tweet_image">\n\n  <div class="next_button">\n    <ion-icon class="add_pic_tweet" ios="ios-image" md="md-image" (click)="getImage()"></ion-icon>\n    <button ion-button round (click)="createTweet()" class="create_tweet next_button-btn">\n      <span ion-text>Tweeter</span>\n    </button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/newtweet/newtweet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], NewtweetPage);
    return NewtweetPage;
}());

//# sourceMappingURL=newtweet.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signin_signin__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__intro_intro__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__image_upload_image_upload__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, platform, modalCtrl, actionsheetCtrl, afAuth, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        this.afAuth = afAuth;
        this.user = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser;
        this.usermail = this.user.email; //get the user's email
        this.displayName = this.user.displayName; //get the user's pseudo
        this.userCrea = this.user.metadata;
        this.userImg = this.user.photoURL; //get the user's image
        this.userId = this.user.uid;
        afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__signin_signin__["a" /* SigninPage */]);
                return;
            }
            //this.items = db.list('tweets').valueChanges();
            _this.items = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('tweets/');
            //this.items = db.list(`tweets/${this.userID}`).valueChanges();
            console.log(_this.items);
        });
        this.tweetsByUser = db.list('tweets_by_user/' + this.userId).valueChanges();
        //Pour récupérer une image dans le FireBase Storage
        var storage = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.storage().ref('users/');
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
    ProfilePage.prototype.changeListener = function ($event) {
        this.file = $event.target.files[0];
        console.log(this.file);
    };
    ProfilePage.prototype.logOut = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signOut().then(function () {
            //firebase.auth().getRedirectResult();
        }, function (error) {
        });
        setTimeout(function () {
            var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__intro_intro__["a" /* IntroPage */]);
            modal.present();
            //this.navCtrl.push(IntroPage);
        }, 1000);
    };
    ProfilePage.prototype.imageProfil = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__image_upload_image_upload__["a" /* ImageUploadPage */]);
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>\n  <ion-navbar color=twitter>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>-->\n\n<ion-content padding >\n  <img class="background_profil" src="../../assets/imgs/twitter_background.jpg" alt="User profil pic">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col class="user_info" col-lg-1>\n        <img src="{{userImg}}" alt="User profil pic">\n        <h3>{{displayName}} <ion-icon class="exit" ios="ios-exit-outline" md="md-exit" (click)="logOut()"></ion-icon></h3>\n        <p class="user_mail">@{{displayName}}</p>\n        <p class="user_crea"><ion-icon ios="ios-calendar" md="md-calendar">&nbsp;</ion-icon>A rejoint TweetDuck le {{userCrea.creationTime | date: \'dd MMMM yyyy\'}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class="tweet_after">\n      <ion-col class="col_tweet">\n        <span><b>Tweets</b></span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card *ngFor="let item of (tweetsByUser | async)?.slice().reverse()">\n    <ion-item>\n      <ion-avatar item-start>\n        <!--<h2>{{item.name}}</h2>-->\n        <span class="tweet_info">\n          <img style="display: inline-block" src="{{item.tweet_user_img}}">\n          <span class="tweet_info_user">\n            <p class="user_tweet"><b>{{item.tweet_user}}</b> <span class="link_user">@{{item.tweet_user}}</span></p>\n            <!--<ion-datetime displayFormat="DD/MM/YYYY à HH:mm" [(ngModel)]="date">{{item.date}}</ion-datetime>-->\n            <p class="tweet_date">{{item.date | date: \'dd/MM/yyyy à H:mm\'}}</p>\n          </span>\n        </span>\n        <br><br>\n      </ion-avatar>\n    </ion-item>\n\n    <ion-card-content>\n      <p>{{item.tweet}}</p>\n    </ion-card-content>\n  </ion-card>\n\n  <!--<ion-item *ngFor="let item of (items | async)?.slice().reverse()">\n      {{item.tweet_user}}\n  </ion-item>\n  <button ion-button color="duckcoin" (click)="logOut()">Se déconnecter</button>-->\n</ion-content>\n'/*ion-inline-end:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 210;

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/comment/comment.module": [
		526,
		9
	],
	"../pages/image-upload/image-upload.module": [
		527,
		8
	],
	"../pages/intro/intro.module": [
		528,
		7
	],
	"../pages/like/like.module": [
		529,
		6
	],
	"../pages/login/login.module": [
		530,
		5
	],
	"../pages/newcomment/newcomment.module": [
		532,
		4
	],
	"../pages/newtweet/newtweet.module": [
		535,
		3
	],
	"../pages/profile/profile.module": [
		531,
		2
	],
	"../pages/signin/signin.module": [
		533,
		1
	],
	"../pages/signup/signup.module": [
		534,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 252;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signin_signin__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comment_comment__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__like_like__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__newtweet_newtweet__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators__ = __webpack_require__(28);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl, navParams, afAuth, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.username = '';
        afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__signin_signin__["a" /* SigninPage */]);
                return;
            }
            _this.userID = __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth().currentUser.uid;
            _this.username = user.email;
            _this.userimage = user.photoURL;
            _this.displayName = user.displayName; //get the user's pseudo
            //this.commentsRef = db.list('comments');
            var users = db.list('users').valueChanges();
            for (var useer in users) {
                console.log(useer);
            }
            //this.items = db.list(`tweets/${this.userID}`).valueChanges();
            // this.items = db.list('tweets/').valueChanges();
            // console.log('this.items1', this.items);
            _this.itemRef = db.list('tweets');
            _this.items = _this.itemRef.snapshotChanges()
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["map"])(function (changes) { return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); }); }));
            console.log('this.items2', _this.itemRef);
            var useers = __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.database().ref().child('users').child('uid');
            var tweeets = __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.database().ref().child('tweets');
            tweeets.on('child_added', function (snap) {
                //console.log(snap.val());
                useers.once('value', function (user) {
                    //console.log(user.val());
                });
            });
            /*return firebase.database().ref('tweets/').once('value').then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    childSnapshot.forEach(function(childSnapshot) {
                        var items = childSnapshot.val();
                    });
                });
            });*/
            /*var refUsers = db.list('users');
            //refUsers.push({'nom': 'Leininger', 'prenom': 'Brandon', 'pseudo': 'brandonle', 'tweet_id':2});
            //refUsers.push({'name': 'AnotherName2', message: 'Un commentaire2. ', 'tweet_id':3});
  
            var ref = firebase.database().ref('tweets');
            ref.on("child_added", function (snapshot, childKey) {
                console.log(childKey);
            });*/
            /*console.log(ref.child('tweet').key);
            ref.once('value').then(function(snapshot) {
                var numchildren = snapshot.numChildren();
                var key = snapshot.val();
                var childKey = snapshot.child("tweet").key;
                //console.log(numchildren);
                console.log(key);
                console.log(key.name);
                //console.log(childKey);
            });*/
            //console.log(db.list('tweets').valueChanges());
            //this.tweetComments = db.list('tweets').valueChanges();
            //console.log(this.items = db.list('tweets').valueChanges());
            //console.log(this.commentsRef = db.list('tweets'));
        });
    } //constructor end
    //Pour afficher la modal des Commentaires
    HomePage.prototype.presentComment = function (key) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__comment_comment__["a" /* CommentPage */], { tweet: this.itemRef, key: key });
        modal.present();
    };
    //Pour afficher la modal des Likes
    HomePage.prototype.presentLike = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__like_like__["a" /* LikePage */]);
        modal.present();
    };
    //Pour afficher la création de Tweets
    HomePage.prototype.presentAddTweet = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__newtweet_newtweet__["a" /* NewtweetPage */]);
        modal.present();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewcommentPage', this.items);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="twitter">\n    <ion-title>TweetDuck</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!--<h2 class="username">{{username}}</h2>-->\n  <div class="add_tweet" (click)="presentAddTweet()"><ion-icon class="add_tweet" ios="ios-add-circle" md="md-add-circle"></ion-icon></div>\n\n  <!--<ion-card *ngFor="let item of tweetComments">\n    <p>{{item.tweet}}</p>\n  </ion-card>-->\n\n  <!--<hr style="background: white">-->\n  <ion-card *ngFor="let item of (items | async)?.slice().reverse()">\n    <ion-item>\n      <ion-avatar item-start>\n        <span class="tweet_info">\n          <img style="display: inline-block" src="{{item.tweet_user_img}}">\n          <span class="tweet_info_user">\n            <p class="user_tweet"><b>{{item.key}}</b> <span class="link_user">@{{item.tweet_user}}</span></p>\n            <!--<ion-datetime displayFormat="DD/MM/YYYY à HH:mm" [(ngModel)]="date">{{item.date}}</ion-datetime>-->\n            <p class="tweet_date">{{item.date | date: \'dd/MM/yyyy à H:mm\'}}</p>\n          </span>\n        </span>\n        <br><br>\n      </ion-avatar>\n    </ion-item>\n\n    <ion-card-content>\n\n      <p>{{item.tweet}}</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col class="likes_comments_bar">\n        <button ion-button icon-start clear small>\n          <div class="likes_title" (click)="presentLike()">\n            <ion-icon name="thumbs-up"></ion-icon>12\n          </div>\n        </button>\n        <button ion-button icon-start clear small>\n          <div class="comments_title" (click)="presentComment(item.key)">\n            <ion-icon name="text"></ion-icon>4\n          </div>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n\n<script>\n  console.log(\'TOO\');\n</script><script src="build/vendor.js"></script>\n'/*ion-inline-end:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */]) === "function" && _e || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e;
}()); //end export class HomePage

/* CES LIGNES POUR CRÉER LA COLLECTION ('tweets' à la place de 'items') (Angulare FirestoreColleciton)
* export class AppComponent {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();
  }
  addItem(item: Item) {
    this.itemsCollection.add(item);
  }
}*/
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.gotoHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage.prototype.gotoSignIn = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SigninPage */]);
    };
    LoginPage.prototype.gotoSignUp = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar color="duckcoin">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2 text-center>La monnaie solidaire</h2>\n\n  <p text-justify>Vous souhaitez être de la partie ? Alors n\'attendez plus ! Connectez-vous ou inscrivez-vous: avec un peu de chance, vous recevrez peut-être\n  un versement de la part d\'un proche ou d\'un ami ? Des millions de DuckCoin sont en jeu !!</p>\n\n  <br>\n\n  <button ion-button block (click)="gotoSignIn()">Se connecter</button>\n\n  <br><br>\n\n  <button ion-button block color="duckcoin" (click)="gotoSignUp()">S\'inscrire</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(441);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_components_module__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_modal_modal__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_newtweet_newtweet__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_newcomment_newcomment__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_like_like__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_comment_comment__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_image_upload_image_upload__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_signin_signin__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_signup_signup__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_image_picker__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_base64__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_camera__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_fire__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_fire_database__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_fire_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_firebase_app__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























//import { TransactionComponent } from '../components/transaction/transaction';
// On importe ici tous les éléments nécessaires au fonctionnement de Firebase



var firebaseConfig = {
    apiKey: "AIzaSyAq_jIP4SCaHtR07MfALT4tWAqVbYf8mSg",
    authDomain: "duckcoin-75b4f.firebaseapp.com",
    databaseURL: "https://duckcoin-75b4f.firebaseio.com",
    projectId: "duckcoin-75b4f",
    storageBucket: "duckcoin-75b4f.appspot.com",
    messagingSenderId: "572695404930"
};

__WEBPACK_IMPORTED_MODULE_29_firebase_app___default.a.initializeApp(firebaseConfig);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_comment_comment__["a" /* CommentPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_like_like__["a" /* LikePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_newtweet_newtweet__["a" /* NewtweetPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_newcomment_newcomment__["a" /* NewcommentPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_image_upload_image_upload__["a" /* ImageUploadPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_app_component__["a" /* MyApp */], {
                    // tabsPlacement: 'top',
                    backButtonText: 'Retour'
                }, {
                    links: [
                        { loadChildren: '../pages/comment/comment.module#CommentPageModule', name: 'CommentPage', segment: 'comment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/image-upload/image-upload.module#ImageUploadPageModule', name: 'ImageUploadPage', segment: 'image-upload', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/like/like.module#LikePageModule', name: 'LikePage', segment: 'like', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newcomment/newcomment.module#NewcommentPageModule', name: 'NewcommentPage', segment: 'newcomment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newtweet/newtweet.module#NewtweetPageModule', name: 'NewtweetPage', segment: 'newtweet', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_26__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_27__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_fire_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_comment_comment__["a" /* CommentPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_like_like__["a" /* LikePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_image_upload_image_upload__["a" /* ImageUploadPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_newtweet_newtweet__["a" /* NewtweetPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_newcomment_newcomment__["a" /* NewcommentPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_27__angular_fire_database__["a" /* AngularFireDatabase */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_camera__["a" /* Camera */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */]],
            exports: []
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/tabs/tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Accueil" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Profil" tabIcon="person"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, navParams, viewCtrl, afDB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.userdata = {};
        this.error = '';
        //this.items = afDB.list('users').valueChanges();
    }
    SigninPage.prototype.gotoHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    SigninPage.prototype.signIn = function () {
        console.log(this.userdata);
        var self = this;
        __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.auth().signInWithEmailAndPassword(this.userdata.email, this.userdata.password)
            .then(function (res) {
            console.log('Signin OK', res);
            self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
        })
            .catch(function (error) {
            // Handle Errors here.
            self.error = error.message;
            // ...
        });
    };
    SigninPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SigninPage.prototype.gotoSignUp = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/signin/signin.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <a href="javascript:void(0)" ion-button (click)="dismiss()">Annuler</a>\n    </ion-buttons>\n    <ion-title>\n      <img class="tweetduck_logo" src="../../assets/imgs/tweetduck.png" alt="TweetDuck logo">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid></ion-grid>\n  <h2 text-center><b>Se connecter à Twitter</b></h2>\n\n  <ion-row>\n    <ion-item>\n      <ion-input type="text"  [(ngModel)]="userdata.email" placeholder="Adresse email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="password" [(ngModel)]="userdata.password" placeholder="Mot de passe"></ion-input>\n    </ion-item>\n\n    <ion-list>\n      <ion-item class="text" *ngFor="let item of items | async">\n        {{item | json}}\n      </ion-item>\n    </ion-list>\n  </ion-row>\n\n  {{error}}\n  <br>\n\n  <div class="next_button">\n    <button class="next_button-btn" ion-button round (click)="signIn()">Se connecter</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bigger_bigger__ = __webpack_require__(513);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__bigger_bigger__["a" /* BiggerDirective */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__bigger_bigger__["a" /* BiggerDirective */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BiggerDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the BiggerDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var BiggerDirective = /** @class */ (function () {
    function BiggerDirective(Element) {
        Element.nativeElement.style.fontSize = '2em';
    }
    BiggerDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[bigger]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], BiggerDirective);
    return BiggerDirective;
}());

//# sourceMappingURL=bigger.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [],
            exports: []
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_intro_intro__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, appCtrl, afAuth) {
        var _this = this;
        this.appCtrl = appCtrl;
        this.afAuth = afAuth;
        //rootPage:any = TabsPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_intro_intro__["a" /* IntroPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            //statusBar.overlaysWebView(false);
            //statusBar.backgroundColorByHexString('#ffffff');
            //statusBar.backgroundColorByName('white');
            splashScreen.hide();
            afAuth.authState.subscribe(function (user) {
                if (!user) {
                    _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_intro_intro__["a" /* IntroPage */]);
                    return;
                }
                else {
                    //console.log(user);
                    _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], { 'username': user.displayName, 'email': user.email });
                }
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nicolas/Desktop/Cours IUT/ionic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"/Users/nicolas/Desktop/Cours IUT/ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPage = /** @class */ (function () {
    function ModalPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        var transactions = [
            {
                'sender': 'charles',
                'recipient': 'maxime',
                'amount': 100,
            },
            {
                'sender': 'charles',
                'recipient': 'raphael',
                'amount': 100,
            },
            {
                'sender': 'charles',
                'recipient': 'doreen',
                'amount': 100,
            },
            {
                'sender': 'charles',
                'recipient': 'louis-joseph',
                'amount': 100,
            },
            {
                'sender': 'charles',
                'recipient': 'elise',
                'amount': 100,
            },
            {
                'sender': 'charles',
                'recipient': 'germain',
                'amount': 100,
            },
            {
                'sender': 'charles',
                'recipient': 'anthony',
                'amount': 100,
            },
            {
                'sender': 'charles',
                'recipient': 'pol',
                'amount': 100,
            },
            {
                'sender': 'charles',
                'recipient': 'vincent',
                'amount': 100,
            },
            {
                'sender': 'charles',
                'recipient': 'nicolas',
                'amount': 100,
            },
            {
                'sender': 'charles',
                'recipient': 'kevin',
                'amount': 100,
            },
            {
                'sender': 'charles',
                'recipient': 'willy',
                'amount': 100,
            },
            {
                'sender': 'charles',
                'recipient': 'elodie',
                'amount': 100,
            },
            {
                'sender': 'charles',
                'recipient': 'adrien',
                'amount': 100,
            },
            {
                'sender': 'charles',
                'recipient': 'romain',
                'amount': 100,
            },
            {
                'sender': 'charles',
                'recipient': 'quentin',
                'amount': 100,
            },
            {
                'sender': 'charles',
                'recipient': 'jean-etienne',
                'amount': 100,
            },
            {
                'sender': 'charles',
                'recipient': 'gael',
                'amount': 100,
            }
        ];
        this.transaction = transactions[this.params.get('sender')];
    }
    ModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/modal/modal.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Description\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n      <ion-item>\n        <ion-avatar item-start>\n          {{transaction.recipient}}\n          <br>\n          TOTO\n        </ion-avatar>\n\n      </ion-item>\n\n\n  </ion-list>\n\n  <button ion-button color="danger" full (click)="dismiss()"><ion-icon name="thumbs-up"></ion-icon></button>\n</ion-content>\n'/*ion-inline-end:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/modal/modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], ModalPage);
    return ModalPage;
}());

/*export class MaPageModal {


  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {
    this.unParamVenuDeLoin = this.params.get('monParam');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}*/
//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__image_upload_image_upload__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, modalCtrl, camera, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.userdata = {};
        this.user = __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.auth().currentUser;
        this.imgPreview = 'https://time2hack.com/favicon.png';
    }
    SignupPage.prototype.presentAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Bienvenue',
            subTitle: 'Félicitations ! Vous êtes inscrit sur TweetDuck, vous pouvez dès ' +
                'maintenant choisir une image de profil et découvrir le monde en temps réel.',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.showImageChooseModal();
                    }
                }
            ]
        });
        alert.present();
    };
    SignupPage.prototype.gotoHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    SignupPage.prototype.gotoSignIn = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
    };
    SignupPage.prototype.getImage = function (uid) {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 100,
            encodingType: this.camera.EncodingType.JPEG,
        }).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.imgPreview = _this.base64Image;
            var img = document.getElementById('user_image');
            img.setAttribute('src', _this.base64Image);
            _this.userPhoto = imageData;
            //this.uploadImage();
        }, function (err) {
            console.log(err);
        });
    };
    SignupPage.prototype.signUp = function () {
        //On récupère les 2 valeurs username du formulaire de création d'utilisateur
        var username = this.userPseudo;
        __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.auth().createUserWithEmailAndPassword(this.userdata.email, this.userdata.password).then(function (res) {
            var userID = __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.auth().currentUser.uid;
            __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.database().ref('users/' + userID).once('value').then(function (snapshot) {
                snapshot.ref.update({ 'nom': 'Leininger', 'prenom': 'Brandon', 'pseudo': 'brandonle' });
                //this.commentsRef.push({'name': 'AnotherName19789809', message: 'Un commentaire1000987787. ', 'tweet_id':2});
                //refUsers.push({'nom': 'Leininger', 'prenom': 'Brandon', 'pseudo': 'brandonle', 'tweet_id':2});
            });
            __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.auth().currentUser.updateProfile({
                displayName: username,
                photoURL: 'https://time2hack.com/favicon.png'
            });
            console.log('Signup OK', res);
        }).catch(function (error) {
        });
        //this.uploadImage();
        this.presentAlert();
    };
    SignupPage.prototype.showImageChooseModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__image_upload_image_upload__["a" /* ImageUploadPage */]);
        modal.present();
    };
    SignupPage.prototype.uploadImage = function () {
        var username = this.userPseudo;
        var storage = __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.storage().ref('users/');
        //this.userid = this.user.uid;
        storage.child('user-' + this.userImage + '.jpg').putString(this.userPhoto, 'base64', { contentType: 'image/jpg' })
            .then(function (savedPicture) {
            savedPicture.ref.getDownloadURL().then(function (downloadURL) {
                var userimg = downloadURL;
                __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.auth().currentUser.updateProfile({
                    displayName: username,
                    photoURL: userimg
                });
            });
        }).catch(function (err) {
            var pet = document.getElementById('pet');
            //pet.innerHTML = err;
            for (var property in err) {
                pet.innerHTML += property + ': ' + err[property] + '; <br>';
            }
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <img class="tweetduck_logo" src="../../assets/imgs/tweetduck.png" alt="TweetDuck logo">\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid></ion-grid>\n  <h2 text-center><b>Créer votre compte</b></h2>\n\n  <ion-row>\n    <ion-item>\n      <ion-input type="text" [(ngModel)]="userPseudo" placeholder="Nom et prénom"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="email" [(ngModel)]="userdata.email" placeholder="Adresse email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="password" [(ngModel)]="userdata.password" placeholder="Mot de passe"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="password" [(ngModel)]="userdata.password" placeholder="Répéter le mot de passe"></ion-input>\n    </ion-item>\n  </ion-row>\n\n  <br>\n  {{error}}\n\n  <div class="next_button">\n    <button class="next_button-btn" ion-button round (click)="signUp()">Suivant</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageUploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ImageUploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImageUploadPage = /** @class */ (function () {
    function ImageUploadPage(navCtrl, navParams, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.user = __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.auth().currentUser;
        this.imgPreview = 'https://time2hack.com/favicon.png';
        this.userID = this.user.uid;
    }
    ImageUploadPage.prototype.getImage = function (uid) {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 100,
            encodingType: this.camera.EncodingType.JPEG,
        }).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.imgPreview = _this.base64Image;
            var img = document.getElementById('user_image');
            img.setAttribute('src', _this.base64Image);
            _this.userPhoto = imageData;
            //this.uploadImage();
        }, function (err) {
            console.log(err);
        });
    };
    ImageUploadPage.prototype.uploadImage = function () {
        var _this = this;
        var username = this.user.displayName;
        var storage = __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.storage().ref('users/');
        //this.userid = this.user.uid;
        storage.child('user-' + this.userID + '.jpg').putString(this.userPhoto, 'base64', { contentType: 'image/jpg' })
            .then(function (savedPicture) {
            savedPicture.ref.getDownloadURL().then(function (downloadURL) {
                var userimg = downloadURL;
                __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.auth().currentUser.updateProfile({
                    displayName: username,
                    photoURL: userimg
                });
            });
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        }).catch(function (err) {
            var pet = document.getElementById('pet');
            //pet.innerHTML = err;
            for (var property in err) {
                pet.innerHTML += property + ': ' + err[property] + '; <br>';
            }
        });
        //this.navCtrl.setRoot(TabsPage);
        //this.navCtrl.setRoot(HomePage);
    };
    ImageUploadPage.prototype.addUserProfil = function () {
        this.uploadImage();
    };
    ImageUploadPage.prototype.noPhoto = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    ImageUploadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImageUploadPage');
    };
    ImageUploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-image-upload',template:/*ion-inline-start:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/image-upload/image-upload.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img class="tweetduck_logo" src="../../assets/imgs/tweetduck.png" alt="TweetDuck logo">\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid></ion-grid>\n    <h2 text-center><b>Choisir une image de profil</b></h2>\n    ID USER: {{userID}}\n    <p class="choose_profilpic">Vous avez un selfie préféré ? Téléchargez-le vite.</p>\n\n    <ion-row>\n        <ion-item class="userPic">\n            <ion-avatar class="white">\n                <img id="user_image" class="avatar" src="{{imgPreview}}" (click)="getImage()">\n            </ion-avatar>\n        </ion-item>\n    </ion-row>\n\n    <div class="next_button">\n        <a href="javascript:void(0)" (click)="noPhoto()">Passer pour le moment</a>\n        <button class="next_button-btn" ion-button round (click)="addUserProfil()">Suivant</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/image-upload/image-upload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]])
    ], ImageUploadPage);
    return ImageUploadPage;
}());

//# sourceMappingURL=image-upload.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    IntroPage.prototype.gotoSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    IntroPage.prototype.gotoSignIn = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SigninPage */]);
        modal.present();
    };
    IntroPage.prototype.presentAddTweet = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SigninPage */]);
        modal.present();
    };
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/intro/intro.html"*/'<!--\n  Generated template for the IntroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <img class="tweetduck_logo" src="../../assets/imgs/tweetduck.png" alt="TweetDuck logo">\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <!--<img class="tweetduck_logo" src="../../assets/imgs/tweetduck.png" alt="TweetDuck logo">-->\n    <p></p>\n    <div>\n      <h2><b>Découvrez ce qui se passe dans le monde en temps réel</b></h2>\n      <button ion-button round color="primary" (click)="gotoSignUp()">Démarrer</button>\n    </div>\n    <p class="">Vous avez déjà un compte ? <a href="javascript:void(0)" (click)="gotoSignIn()">Connectez-vous</a></p>\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/nicolas/Desktop/Cours IUT/ionic/src/pages/intro/intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ })

},[308]);
//# sourceMappingURL=main.js.map