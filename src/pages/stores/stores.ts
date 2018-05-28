import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { ItemsPage } from '../items/items';

import { ItemsServiceProvider } from '../../providers/items-service/items-service';

@Component({
  selector: 'page-stores',
  templateUrl: 'stores.html',
})
export class StoresPage {

  page = 'description';
  language = '';
  store: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public items: ItemsServiceProvider,
    public translate: TranslateService
  ) {
    this.language = this.translate.currentLang;
    this.store = navParams.get('store');
  }

  goToItem(item: string) {
    this.navCtrl.push(ItemsPage, { item: item });
  }

}
