import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StoresServiceProvider {

  stores: any;

  constructor(public http: HttpClient) {
    this.http.get('./assets/db/stores.json').subscribe(data => { this.stores = data; }); 
  }

  get(id: string) {
    return this.stores[id];
  }

}
