import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  public list: any[] = [];

  ngOnInit(): void {
    this.list = this._route.snapshot.data['list'];
  }

  ionViewWillEnter(): void {
    this.list = this._route.snapshot.data['list'];
  }

}
