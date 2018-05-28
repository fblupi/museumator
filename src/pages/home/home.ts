import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, Platform, ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { StoresPage } from '../stores/stores';

import { StoresServiceProvider } from '../../providers/stores-service/stores-service';

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
    private platform: Platform,
    private toastCtrl: ToastController,
    private barcodeScanner: BarcodeScanner
  ) {}

  private launchQRScanner(event: Event) {
    this.barcodeScanner.scan({ formats: 'QR_CODE' })
      .then(result => {
        if (result.cancelled) {
          this.platform.registerBackButtonAction(() => {
            event.preventDefault();
            event.stopPropagation();
          });
        } else {
          this.enterCode(result.text);
        }
      })
      .catch(error => console.log(error));
  }

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
          handler: data => this.enterCode(data.code)
        }
      ]
    });
    alert.present();
  }

  private enterCode(code) {
    let store = this.stores.get(code);
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
