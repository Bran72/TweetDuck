import { Component } from '@angular/core';
import { NavController, ModalController, NavParams} from 'ionic-angular';
import { ModalPage } from '../../pages/modal/modal'; // la page modale est dans le même dossier que la principale
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import {SigninPage} from "../signin/signin";
import {TabsPage} from "../tabs/tabs";
import { CommentPage } from '../comment/comment';
import { LikePage } from '../like/like';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  transactions;
  username = '';
  items;
  constructor(public navCtrl: NavController, public modalCtrl : ModalController, public navParams : NavParams, private afAuth: AngularFireAuth) {
      this.items = [
          {'name':'BeautifulName', 'tweet':'Test de tweet 1 ', 'date':'19/10/2018'},
          {'name':'BeautifulName', 'tweet':'Test de tweet 2.', 'date':'20/10/2018'},
          {'name':'BeautifulName', 'tweet':'Test de tweet 3 ', 'date':'21/10/2018'}
      ];

      afAuth.authState.subscribe(user => {
          if (!user) {
              this.navCtrl.setRoot(SigninPage);
              return;
          }
          console.log(user);
          this.username = user.email;
      });

 } // constructor end

    presentComment() {

        const modal = this.modalCtrl.create(CommentPage);
        modal.present();
    }

    presentLike() {

        const modal = this.modalCtrl.create(LikePage);
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
