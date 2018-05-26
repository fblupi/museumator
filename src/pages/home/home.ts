import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { StoresPage } from '../stores/stores';

import { StoresServiceProvider } from '../../providers/stores-service/stores-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private translate: TranslateService,
    private stores: StoresServiceProvider,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {}

  private enterCodeAlert() {
    let alert = this.alertCtrl.create({
      title: this.translate.instant('ENTER_CODE_TITLE'),
      message: this.translate.instant('ENTER_CODE_MESSAGE'),
      inputs: [
        {
          name: 'code',
          placeholder: this.translate.instant('CODE')
        }
      ],
      buttons: [
        {
          text: this.translate.instant('CANCEL'),
          role: 'cancel'
        },
        {
          text: this.translate.instant('OK'),
          handler: data => this.enterCodeAlertOk(data)
        }
      ]
    });
    alert.present();
  }

  private enterCodeAlertOk(data) {
    let store = this.stores.get(data.code);
    if (store !== undefined) {
      this.goodResponse(store);
    } else {
      this.showErrorToast(this.translate.instant('ENTER_CODE_BAD_INPUT'));
      return false;
    }
  }

  private goodResponse(store) {
    this.navCtrl.push(StoresPage, { store: store });
  }

  private showErrorToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

}
