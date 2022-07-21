import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchForm!: FormGroup;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup<any>({
      search: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });
  }

  ionViewWillEnter(): void {
    this.searchForm = new FormGroup<any>({
      search: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });
  }

  submitForm(){
    if(this.searchForm.valid){
      const itemId: string = this.searchForm.value.search;

      console.log("/// test ///", itemId);

      this._router.navigate(['item',itemId]);
    }
  }
}
