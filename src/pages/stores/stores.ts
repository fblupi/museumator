import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { ItemsPage } from '../items/items';

import { ItemsServiceProvider } from '../../providers/items-service/items-service';

@Component({
  selector: 'page-stores',
  templateUrl: 'stores.html',
})
export class StoresPage {

  private page = 'description';
  private language = '';
  private store: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private items: ItemsServiceProvider,
    private translate: TranslateService
  ) {
    this.language = this.translate.currentLang;
    this.store = navParams.get('store');
  }

  private goToItem(item) {
    this.navCtrl.push(ItemsPage, { item: item });
  }

}
