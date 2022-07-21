import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private readonly _http: HttpClient) { }

  private _list: any[] = [];

  public async getList() {

    if(this._list.length){
      return this._list;
    } else {
      const url = "http://localhost:3000/additives";
      const request: any = await this._http.get(url);
      const result: any[] = await firstValueFrom(request);

      this._list = result;
      return result;
    }
  }

  public  async getItemById(itemId: string) {
    let item: any;


    if(this._list.length){
      item = this._list.find((additive: any) => additive.id === `${itemId}`);
    } else {
      const fetchedList = await this.getList();
      item = fetchedList.find((additive: any) => additive.id === `${itemId}`);
    }

    return item;
  }
}
