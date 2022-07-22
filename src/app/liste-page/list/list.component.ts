import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IonModal } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;

  constructor(private _route: ActivatedRoute) { }
  public isModalOpen: boolean = false;
  public list: any[] = [];
  public maxDisplay: number = 10;

  ngOnInit(): void {
    this.list = this._route.snapshot.data['list'];
  }

  ionViewWillEnter(): void {
    this.list = this._route.snapshot.data['list'];
  }

  handleOpenModal () {
    this.isModalOpen = true;
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
    this.isModalOpen = false;
  }

  loadData(event:any) {
    setTimeout(() => {
      if(this.list.length >= this.maxDisplay){
        this.maxDisplay = this.maxDisplay + 10;
        event.target.complete();
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
