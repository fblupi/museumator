import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
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
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
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

  goToSettingsPage() {
    this.nav.push(SettingsPage);
    this.closeMenu();
  }

  goToAboutUsPage() {
    this.nav.push(AboutUsPage);
    this.closeMenu();
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  initTranslate(globalizationResult: string = '') {
    let language = this.getLanguage(globalizationResult)
    this.translate.setDefaultLang(language);
    this.translate.use(language);
  }

  getLanguage(globalizationResult: string) {
    let language = 'en';
    if (globalizationResult !== '') {
      if (globalizationResult.indexOf('es') != -1) {
        language = 'es';
      }
    }
    return language;
  }

}

