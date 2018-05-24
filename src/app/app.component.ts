import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';

import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('rootpage') nav: NavController

  rootPage: any = HomePage;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    private translate: TranslateService,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.initTranslate();
    });
  }

  initTranslate() {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  goToSettingsPage() {
    this.nav.push(SettingsPage);
    this.closeMenu();
  }

  closeMenu() {
    this.menuCtrl.close();
  }

}

