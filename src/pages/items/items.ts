import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {

  language: string = '';
  item: any;

  constructor(
    private navParams: NavParams,
    private translate: TranslateService
  ) {
    this.language = this.translate.currentLang;
    this.item = this.navParams.get('item');
  }

}
