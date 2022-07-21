import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { IonicModule } from "@ionic/angular";
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
  },
];

@NgModule({
  declarations: [
    SearchComponent
  ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
    ]
})
export class SearchPageModule { }
