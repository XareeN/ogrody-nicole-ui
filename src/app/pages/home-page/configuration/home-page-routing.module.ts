import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { VIEW_HOME_PATH } from 'src/app/configuration/paths';
import { EMPTY_STRING } from 'src/app/shared/utils';

const routes: Routes = [
  { path: EMPTY_STRING, component: HomePageComponent },
  { path: VIEW_HOME_PATH, redirectTo: '/', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
