import { Component } from '@angular/core';
import { NavController, ModalController, NavParams} from 'ionic-angular';
import { ModalPage } from '../../pages/modal/modal'; // la page modale est dans le même dossier que la principale
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import firebase from 'firebase/app';
import {SigninPage} from "../signin/signin";
import {TabsPage} from "../tabs/tabs";
import { CommentPage } from '../comment/comment';
import { LikePage } from '../like/like';
import {NewtweetPage} from "../newtweet/newtweet";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  transactions;
  username = '';
  //commentsRef:any;
  date:any;
  items;
  tweetComments:any;
displayName:any;
  constructor(public navCtrl: NavController, public modalCtrl : ModalController, public navParams : NavParams, private afAuth: AngularFireAuth, db: AngularFireDatabase) {
      //On s'assure et redirige l'utilisateur en fonction de son état, s'il est connecté ou non.
      afAuth.authState.subscribe(user => {
          if (!user) { //S'il n'est pas connecté, celui-ci est retourné sur la page Root
              this.navCtrl.setRoot(SigninPage);
              return;
          }
          this.username = user.email;
          this.displayName = user.displayName; //get the user's pseudo
          //this.commentsRef = db.list('tweets');
          this.items = db.list('tweets').valueChanges();
          this.tweetComments = db.list('tweets').valueChanges();
          //console.log(this.items = db.list('tweets').valueChanges());

          //console.log(this.commentsRef = db.list('tweets'));
      });

 } //constructor end

    //Pour afficher la modal des Commentaires
    presentComment() {
        const modal = this.modalCtrl.create(CommentPage);
        modal.present();
    }

    //Pour afficher la modal des Likes
    presentLike() {
        const modal = this.modalCtrl.create(LikePage);
        modal.present();
    }

    //Pour afficher la création de Tweets
    presentAddTweet() {
        const modal = this.modalCtrl.create(NewtweetPage);
        modal.present();
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
