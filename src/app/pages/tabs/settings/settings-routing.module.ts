import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';
import { HomePage } from '../../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
  },
  {
    path: 'child-page',
    component: HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule {}
