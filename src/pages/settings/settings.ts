import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  languages: any[] = [];
  currentLanguage: String;

  constructor(
    private translate: TranslateService,
    private navCtrl: NavController
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

  changeLanguage(language) {
    this.translate.use(language);
  }

}
