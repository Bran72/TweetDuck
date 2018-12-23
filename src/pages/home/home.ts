import {Component} from '@angular/core';
import {NavController, ModalController, NavParams} from 'ionic-angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import firebase, {database} from 'firebase/app';
import {SigninPage} from "../signin/signin";
import {TabsPage} from "../tabs/tabs";
import {CommentPage} from '../comment/comment';
import {LikePage} from '../like/like';
import {NewtweetPage} from "../newtweet/newtweet";
//import {Observable, Subject} from 'rxjs';
import {map} from "rxjs/operators";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    transactions;
    username = '';
    userimage: any;
    //commentsRef:any;
    itemRef;
    date: any;
    items;
    item;
    tweetComments: any;
    displayName: any;
    userID: any;

    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, private afAuth: AngularFireAuth, db: AngularFireDatabase) {
        afAuth.authState.subscribe(user => { //On s'assure et re-dirige l'utilisateur en fonction de son état, s'il est connecté ou non.
            if (!user) { //S'il n'est pas connecté, celui-ci est retourné sur la page Root
                this.navCtrl.setRoot(SigninPage);
                return;
            }
            this.userID = firebase.auth().currentUser.uid;

            this.username = user.email;
            this.userimage = user.photoURL;
            this.displayName = user.displayName; //get the user's pseudo
            //this.commentsRef = db.list('comments');

            var users = db.list('users').valueChanges();

            this.itemRef = db.list('tweets');
            this.items = db.list('tweets').snapshotChanges()
                .pipe(map(changes => {
                    return changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
                }));
            console.log('this.items2', this.itemRef);


            var useers = firebase.database().ref().child('users').child('uid');
            var tweeets = firebase.database().ref().child('tweets');

            tweeets.on('child_added', snap => {
                //console.log(snap.val());
                useers.once('value', user => {
                    //console.log(user.val());
                });
            });
        });

    } //constructor end

    //Pour afficher la modal des Commentaires
    presentComment(key) {
        const modal = this.modalCtrl.create(CommentPage, {tweet: this.itemRef, key: key});
        modal.present();
    }

    log(val) {
        console.log('val', val);
    }

    countObj(obj) {
        return Object.keys(obj).length;
    }

    //Pour afficher la modal des Likes
    presentLike(key) {
        const modal = this.modalCtrl.create(LikePage, {tweet: this.itemRef, key: key});
        modal.present();
    }

    //Pour afficher la création de Tweets
    presentAddTweet() {
        const modal = this.modalCtrl.create(NewtweetPage);
        modal.present();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad NewcommentPage', this.items);
    }
} //end export class HomePage


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
