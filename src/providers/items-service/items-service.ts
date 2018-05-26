import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ItemsServiceProvider {

  private items: any;

  constructor(public http: HttpClient) {
    this.http.get('./assets/db/items.json').subscribe(data => { this.items = data; }); 
  }

  get(id) {
    return this.items[id];
  }

}
