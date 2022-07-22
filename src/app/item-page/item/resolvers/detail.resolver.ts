import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {ListService} from "../../../liste-page/list/servives/list.service";

@Injectable({
  providedIn: 'root'
})
export class DetailResolver implements Resolve<boolean> {

  constructor(private readonly _services: ListService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this._services.getDetail(route.params['id']);
  }
}
