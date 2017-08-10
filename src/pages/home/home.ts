import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Chapter1Page} from '../chapter1/chapter1';
import {TocPage} from '../toc/toc';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tocPage = TocPage;
  constructor(public navCtrl: NavController) {

  }

}
