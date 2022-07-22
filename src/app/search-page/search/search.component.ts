import {Component, OnInit, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  public searchForm!: FormGroup;
  public ids!: any[];
  public isModalOpen: boolean = false;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    public toastController: ToastController
  ) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup<any>({
      search: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });
    this.ids = this._route.snapshot.data['ids'];
  }

  ionViewWillEnter(): void {
    this.searchForm = new FormGroup<any>({
      search: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });
    this.ids = this._route.snapshot.data['ids'];
  }

  async presentToast(additiveId: string) {
    const toast = await this.toastController.create({
      message: `L'additif E${additiveId} n'a pas été trouvé.`,
      duration: 2000,
      color: 'danger',
    });
    await toast.present();
  }

  submitForm(){
    if(this.searchForm.valid){
      const itemId: string = this.searchForm.value.search;

      if(this.ids.includes(itemId)){
        this._router.navigate(['item',itemId]);
      } else {
        this.presentToast(itemId).then(() => {});
      }
    }
  }
  handleOpenModal () {
    this.isModalOpen = true;
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
    this.isModalOpen = false;
  }
}
