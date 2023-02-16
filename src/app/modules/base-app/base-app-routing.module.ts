import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseAppComponent } from './base-app.component';

const routes: Routes = [
  {
    path: '',
    component: BaseAppComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'user-management',
        loadChildren: () => import('../user-management/user-management.module').then((m) => m.UserManagementModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then((m) => m.SettingsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseAppRoutingModule { }
