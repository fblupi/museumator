import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {

  language = '';
  item: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public translate: TranslateService
  ) {
    this.language = this.translate.currentLang;
    this.item = navParams.get('item');
  }

}
