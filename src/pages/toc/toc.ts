import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Chapter1Page} from '../chapter1/chapter1';
import {Chapter2Page} from '../chapter2/chapter2';

/**
 * Generated class for the TocPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toc',
  templateUrl: 'toc.html',
})
export class TocPage {

  chapter1 = Chapter1Page;
  chapter2 = Chapter2Page;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TocPage');
  }

}
