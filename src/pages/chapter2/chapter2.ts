import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Section1Page} from '../section1/section1';

/**
 * Generated class for the Chapter2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter2',
  templateUrl: 'chapter2.html',
})
export class Chapter2Page {

  section1 = Section1Page;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter2Page');
  }

}
