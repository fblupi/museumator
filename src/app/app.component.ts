import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';

import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { AboutUsPage } from '../pages/about-us/about-us';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('rootpage') nav: NavController

  rootPage: any = HomePage;

  constructor(
    private platform: Platform, 
    private statusBar: StatusBar, 
    private splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    private translate: TranslateService,
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.initTranslate();
    });
  }

  private initTranslate() {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  private goToSettingsPage() {
    this.nav.push(SettingsPage);
    this.closeMenu();
  }

  private goToAboutUsPage() {
    this.nav.push(AboutUsPage);
    this.closeMenu();
  }

  private closeMenu() {
    this.menuCtrl.close();
  }

}

