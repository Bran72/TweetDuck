import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Platform } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  valeur : any;
  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {
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

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

}

/*export class MaPageModal {


  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {
    this.unParamVenuDeLoin = this.params.get('monParam');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}*/
