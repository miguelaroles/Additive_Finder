import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from "./features/not-found/not-found.component";
import { ListResolver } from "./liste-page/list/resolvers/list.resolver";
import {ItemResolver} from "./item-page/item/resolvers/item.resolver";

const routes: Routes = [
  {
    path: 'list', loadChildren: () =>
      import('./liste-page/liste-page.module')
        .then(module => module.ListePageModule),
    resolve: {
      list: ListResolver
    },
  },
  {
    path: 'search', loadChildren: () =>
      import('./search-page/search-page.module')
        .then(module => module.SearchPageModule)
  },
  {
    path: 'item/:id', loadChildren: () =>
      import('./item-page/item-page.module')
        .then(module => module.ItemPageModule),
    resolve: {
      additive: ItemResolver
    },
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
