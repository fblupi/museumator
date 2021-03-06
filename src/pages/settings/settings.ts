import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { NativeStorage } from '@ionic-native/native-storage';

import { UITranslationsProvider } from '../../providers/ui-translations/ui-translations';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  languages: any[] = [];
  currentLanguage: string;

  constructor(
    private translate: TranslateService,
    private navCtrl: NavController,
    private nativeStorage: NativeStorage,
    private uiTranslations: UITranslationsProvider
  ) { 
    this.currentLanguage = this.translate.currentLang;
    this.languages = [
      {
        value: 'es',
        label: 'Español'
      },
      {
        value: 'en',
        label: 'English'
      }
    ];
  }

  goBack() {
    this.navCtrl.pop();
  }

  changeLanguage(language: string) {
    this.translate.use(language);
    this.nativeStorage.setItem('language', language);
    this.uiTranslations.translateElements();
  }

}
