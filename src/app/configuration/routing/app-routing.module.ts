import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EMPTY_STRING } from 'src/app/shared/utils';

const routes: Routes = [
  {
    path: EMPTY_STRING,
    loadChildren: () => import('../../pages/home-page/home-page.module').then((m) => m.HomePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
