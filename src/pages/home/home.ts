import { Component } from '@angular/core';
import { NavController, ModalController, NavParams} from 'ionic-angular';
import { ModalPage } from '../../pages/modal/modal'; // la page modale est dans le même dossier que la principale
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import firebase, {database} from 'firebase/app';
import {SigninPage} from "../signin/signin";
import {TabsPage} from "../tabs/tabs";
import { CommentPage } from '../comment/comment';
import { LikePage } from '../like/like';
import {NewtweetPage} from "../newtweet/newtweet";
import { map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  transactions;
  username = '';
  userimage:any;
  //commentsRef:any;
  itemRef;
  date:any;
  items;
  item;
  tweetComments:any;
  displayName:any;
  userID:any;
    constructor(public navCtrl: NavController, public modalCtrl : ModalController, public navParams : NavParams, private afAuth: AngularFireAuth, db: AngularFireDatabase) {
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
          for(var useer in users){
              console.log(useer);
          }


          this.itemRef = db.list('tweets')
          this.items = this.itemRef.snapshotChanges()
            .pipe(map(changes => {return changes.map(c => ({key: c.payload.key, ...c.payload.val()}))}))
          console.log('this.items2', this.itemRef);

          var useers = firebase.database().ref().child('users').child('uid');
          var tweeets = firebase.database().ref().child('tweets');

          tweeets.on('child_added', snap =>{
              //console.log(snap.val());
              useers.once('value', user=>{
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
