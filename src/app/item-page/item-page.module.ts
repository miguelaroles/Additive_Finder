import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { IonicModule } from "@ionic/angular";
import {RouterModule, Routes} from "@angular/router";
import { ColorPipe } from './item/pipes/color.pipe';
import { LegendPipe } from './item/pipes/legend.pipe';

const routes: Routes = [
  {
    path: '',
    component: ItemComponent,
  },
];


@NgModule({
  declarations: [
    ItemComponent,
    ColorPipe,
    LegendPipe
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
  ]
})
export class ItemPageModule { }
