import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from "./features/not-found/not-found.component";

const routes: Routes = [
  {
    path: 'list', loadChildren: () =>
      import('./liste-page/liste-page.module')
        .then(module => module.ListePageModule)
  },
  {
    path: 'search', loadChildren: () =>
      import('./search-page/search-page.module')
        .then(module => module.SearchPageModule)
  },
  {
    path: 'item/:id', loadChildren: () =>
      import('./item-page/item-page.module')
        .then(module => module.ItemPageModule)
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
