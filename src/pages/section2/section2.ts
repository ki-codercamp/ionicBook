import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Section3Page} from '../section3/section3';

/**
 * Generated class for the Section2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-section2',
  templateUrl: 'section2.html',
})
export class Section2Page {

  section3 = Section3Page;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Section2Page');
  }

}
