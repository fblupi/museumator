import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';

import { ItemsPage } from '../items/items';

import { ItemsServiceProvider } from '../../providers/items-service/items-service';

@Component({
  selector: 'page-stores',
  templateUrl: 'stores.html',
})
export class StoresPage {

  page: string = 'description';
  language: string = '';
  store: any;

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    private translate: TranslateService,
    public items: ItemsServiceProvider,
    public sanitizer: DomSanitizer
  ) {
    this.language = this.translate.currentLang;
    this.store = this.navParams.get('store');
  }

  goToItem(item: string) {
    this.navCtrl.push(ItemsPage, { item: item });
  }

}
