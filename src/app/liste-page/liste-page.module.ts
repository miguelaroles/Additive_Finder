import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { IonicModule } from "@ionic/angular";
import {RouterModule, Routes} from "@angular/router";
import { ColorPipe } from './list/pipes/color.pipe';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
];

@NgModule({
  declarations: [
    ListComponent,
    ColorPipe
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
  ]
})
export class ListePageModule { }
