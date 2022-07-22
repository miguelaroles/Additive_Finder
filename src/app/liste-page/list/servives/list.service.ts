import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { firstValueFrom, Observable } from "rxjs";
import { Additive } from "src/app/Interfaces/additive.interface";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private readonly _http: HttpClient) { }

  private _list: Additive[] = [];
  private _idList: string[] = [];

  public async getList() {

    if(this._list.length){
      return this._list;
    } else {
      const url = "http://localhost:3000/additives";
      const request: Observable<any> = await this._http.get(url);
      const result: Additive[] = await firstValueFrom(request);

      this._list = result;
      this._idList = result.map((additive: Additive) => additive.id);
      return result;
    }
  }

  public async getItemById(itemId: string) {
    let item: Additive | undefined;

    if(this._list.length){
      item = this._list.find((additive: Additive) => additive.id === `${itemId}`);
    } else {
      const fetchedList = await this.getList();
      item = fetchedList.find((additive: Additive) => additive.id === `${itemId}`);
    }

    return item;
  }

  public async getIds() {
    if(this._idList.length){
      return this._idList;
    } else {
      const fetchedList = await this.getList();
      return fetchedList.map((additive: Additive) => additive.id);
    }
  }

  public async getDetail(id: string) {
    try {
      const url = `https://fr.wikipedia.org/api/rest_v1/page/summary/E${id}`;
      const request: Observable<any> = await this._http.get(url);
      return await firstValueFrom(request);
    } catch (e) {
      return null;
    }
  }
}
