import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Section2Page} from '../section2/section2';

/**
 * Generated class for the Section1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-section1',
  templateUrl: 'section1.html',
})
export class Section1Page {

  section2 = Section2Page;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Section1Page');
  }

}
