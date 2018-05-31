import { Config } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class UITranslationsProvider {

  constructor(
    private translate: TranslateService,
    private config: Config
  ) {}

  translateElements() {
    this.translate.get('BACK').subscribe(text => this.config.set('ios', 'backButtonText', text));
  }

}
