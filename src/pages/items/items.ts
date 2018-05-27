import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {

  private language = '';
  private item: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private translate: TranslateService
  ) {
    this.language = this.translate.currentLang;
    this.item = navParams.get('item');
  }

}
