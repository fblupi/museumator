import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Globalization } from '@ionic-native/globalization';
import { NativeStorage } from '@ionic-native/native-storage';
import { GoogleMaps } from '@ionic-native/google-maps';

import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateLoader, TranslateModule} from "@ngx-translate/core"
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { IonicImageViewerModule } from 'ionic-img-viewer';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { AboutUsPage } from '../pages/about-us/about-us';
import { StoresPage } from '../pages/stores/stores';
import { ItemsPage } from '../pages/items/items';

import { StoresServiceProvider } from '../providers/stores-service/stores-service';
import { ItemsServiceProvider } from '../providers/items-service/items-service';
import { UITranslationsProvider } from '../providers/ui-translations/ui-translations';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    AboutUsPage,
    StoresPage,
    ItemsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicImageViewerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    AboutUsPage,
    StoresPage,
    ItemsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Globalization,
    NativeStorage,
    GoogleMaps,
    StoresServiceProvider,
    ItemsServiceProvider,
    UITranslationsProvider
  ]
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
