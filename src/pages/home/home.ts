import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  languages: any[] = [];

  constructor(
    private translate: TranslateService,
    public navCtrl: NavController
  ) {
    this.languages = [
      {
        value: 'es',
        label: 'Español'
      },
      {
        value: 'en',
        label: 'English'
      }
    ]
  }

  public changeLanguage(language) {
    this.translate.use(language);
  }

}
