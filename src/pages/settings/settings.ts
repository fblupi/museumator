import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  private languages: any[] = [];
  private currentLanguage: String;

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

  private goBack() {
    this.navCtrl.pop();
  }

  private changeLanguage(language) {
    this.translate.use(language);
  }

}
