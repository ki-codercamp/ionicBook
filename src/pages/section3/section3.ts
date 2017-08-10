import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Chapter2Page} from '../chapter2/chapter2';

/**
 * Generated class for the Section3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-section3',
  templateUrl: 'section3.html',
})
export class Section3Page {

  chapter2 = Chapter2Page;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Section3Page');
  }

}
