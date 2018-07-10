import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {

  language: string = '';
  item: any;

  constructor(
    private navParams: NavParams,
    private translate: TranslateService,
    public sanitizer: DomSanitizer
  ) {
    this.language = this.translate.currentLang;
    this.item = this.navParams.get('item');
  }

}
