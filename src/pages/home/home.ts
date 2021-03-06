import { Component } from '@angular/core';
import { AlertController, NavController, Platform, ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { StoresPage } from '../stores/stores';

import { StoresServiceProvider } from '../../providers/stores-service/stores-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  scanning: boolean = false;
  unregisterBackButtonAction: any;

  constructor(
    private translate: TranslateService,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private platform: Platform,
    private barcodeScanner: BarcodeScanner,
    private stores: StoresServiceProvider
  ) {}

  ionViewDidEnter() {
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
      if (this.scanning) {
        this.scanning = false;
      } else {
        this.platform.exitApp();
      }
    });
  }

  ionViewWillLeave() {
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }

  launchQRScanner(event: Event) {
    this.scanning = true;
    this.barcodeScanner.scan({ formats: 'QR_CODE' })
      .then(result => {
        if (!result.cancelled) {
          this.enterCode(result.text);
        }
      })
      .catch(error => console.log(error));
  }

  enterCodeAlert() {
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

  enterCode(code: string) {
    let store = this.stores.get(code);
    if (store !== undefined) {
      this.goodResponse(store);
    } else {
      this.showErrorToast(this.translate.instant('ENTER_CODE_BAD_INPUT'));
      return false;
    }
  }

  goodResponse(store: string) {
    this.navCtrl.push(StoresPage, { store: store });
  }

  showErrorToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

}
