import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the LikePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-like',
    templateUrl: 'like.html',
})
export class LikePage {

    items: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
        this.items = [
            {'name': 'AnotherName1'},
            {'name': 'AnotherName2'},
            {'name': 'AnotherName3'},
            {'name': 'AnotherName4'},
        ];
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LikePage');
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
