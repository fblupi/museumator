import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { Globalization } from '@ionic-native/globalization';

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
    private globalization: Globalization
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.globalization.getPreferredLanguage()
        .then((result) => {
          this.initTranslate(result.value)
        })
        .catch(() => {
          this.initTranslate();
        });
    });
  }

  private initTranslate(globalizationResult: string = '') {
    this.translate.setDefaultLang(this.getLanguage(globalizationResult));
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

  private getLanguage(globalizationResult: string) {
    let language = 'en';
    if (globalizationResult !== '') {
      if (globalizationResult.indexOf('es') != -1) {
        language = 'es';
      }
    }
    return language;
  }

}

