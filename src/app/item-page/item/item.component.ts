import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }
  public additive: any;

  ngOnInit(): void {
    this.additive = this._route.snapshot.data['additive'];
  }

  ionViewWillEnter(): void {
    this.additive = this._route.snapshot.data['additive'];
  }

}
