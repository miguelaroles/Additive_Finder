import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  constructor(private _route: ActivatedRoute) { }
  public additive: any;
  public detail: any;
  public isModalOpen: boolean = false;

  ngOnInit(): void {
    this.additive = this._route.snapshot.data['additive'];
    this.detail = this._route.snapshot.data['detail'];
  }

  ionViewWillEnter(): void {
    this.additive = this._route.snapshot.data['additive'];
    this.detail = this._route.snapshot.data['detail'];
  }

  handleOpenModal () {
    this.isModalOpen = true;
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
    this.isModalOpen = false;
  }

}
