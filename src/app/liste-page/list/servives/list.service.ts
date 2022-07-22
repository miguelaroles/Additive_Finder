import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private readonly _http: HttpClient) { }

  private _list: any[] = [];
  private _idList: any[] = [];

  public async getList() {

    if(this._list.length){
      return this._list;
    } else {
      const url = "http://localhost:3000/additives";
      const request: any = await this._http.get(url);
      const result: any[] = await firstValueFrom(request);

      this._list = result;
      this._idList = result.map((additive: any) => additive.id);
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

  public  async getIds() {

    if(this._idList.length){
      return this._idList;
    } else {
      const fetchedList = await this.getList();
      return fetchedList.map((additive: any) => additive.id);
    }
  }

  public async getDetail(id: string) {
    try {
      const url = `https://fr.wikipedia.org/api/rest_v1/page/summary/E${id}`;
      const request: any = await this._http.get(url);
      return await firstValueFrom(request);
    } catch (e) {
      return null;
    }
  }
}
