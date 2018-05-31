import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { Globalization } from '@ionic-native/globalization';
import { NativeStorage } from '@ionic-native/native-storage';

import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { AboutUsPage } from '../pages/about-us/about-us';

import { UITranslationsProvider } from '../providers/ui-translations/ui-translations';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('rootpage') nav: NavController

  rootPage: any;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    private translate: TranslateService,
    private globalization: Globalization,
    private nativeStorage: NativeStorage,
    private uiTranslations: UITranslationsProvider
  ) {
    platform.ready().then(() => {
      this.rootPage = HomePage;
      statusBar.styleDefault();
      splashScreen.hide();
      this.loadLanguage();
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

  loadLanguage() {
    this.nativeStorage.getItem('language').then(
      data => this.initTranslate(data),
      error => {
        this.globalization.getPreferredLanguage()
          .then((result) => {
            this.initTranslate(this.getLanguage(result.value))
          })
          .catch(() => {
            this.initTranslate();
          });
      }
    );
  }

  initTranslate(language: string = 'es') {
    this.translate.setDefaultLang(language);
    this.translate.use(language);
    this.uiTranslations.translateElements();
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
