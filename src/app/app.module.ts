import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {Chapter1Page} from '../pages/chapter1/chapter1';
import {Chapter2Page} from '../pages/chapter2/chapter2';
import {TocPage} from '../pages/toc/toc';

import {Section1Page} from '../pages/section1/section1';
import {Section2Page} from '../pages/section2/section2';
import {Section3Page} from '../pages/section3/section3';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Chapter1Page,
    Chapter2Page,
    Section1Page,
    Section2Page,
    Section3Page,
    TocPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Chapter1Page,
    Chapter2Page,
    Section1Page,
    Section2Page,
    Section3Page,
    TocPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
