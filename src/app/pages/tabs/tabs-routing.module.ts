import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
      path:'account',
        loadChildren: () => import('../avatar/avatar.module').then( m => m.AvatarPageModule)
      },
      {
        path:'contact',
        loadChildren: () => import('../card/card.module').then( m => m.CardPageModule)
      },
      {
        path:'settings',
        loadChildren: () => import('../fab/fab.module').then( m => m.FabPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
