import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { GoogleMap, GoogleMaps, GoogleMapsEvent } from '@ionic-native/google-maps';

@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {

  map: GoogleMap;

  constructor(
    private googleMaps: GoogleMaps,
    public translate: TranslateService,
    public sanitizer: DomSanitizer
  ) {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap(){
    this.map = this.googleMaps.create('map-canvas', {
      camera: {
        target: {
          lat: this.translate.instant('ABOUT_US_MAP_LAT'),
          lng: this.translate.instant('ABOUT_US_MAP_LNG'),
        },
        zoom: this.translate.instant('ABOUT_US_MAP_ZOOM')
      }
    });
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        this.map.addMarker({
          title: this.translate.instant('ABOUT_US_MAP_PLACE'),
          icon: 'red',
          animation: 'DROP',
          position: {
            lat: this.translate.instant('ABOUT_US_MAP_LAT'),
            lng: this.translate.instant('ABOUT_US_MAP_LNG'),
          }
        });
      })
      .catch(error => console.log(error));
  }
}
