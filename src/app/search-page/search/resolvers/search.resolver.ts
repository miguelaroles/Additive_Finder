import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { ListService } from "../../../liste-page/list/servives/list.service";

@Injectable({
  providedIn: 'root'
})
export class SearchResolver implements Resolve<boolean> {

  constructor(private readonly _services: ListService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this._services.getIds();
  }
}
