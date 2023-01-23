import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './pages/settings/settings.component';
import { UsersListComponent } from './pages/users-list/users-list.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'product-list',
    // component: ProductsListComponent
    loadChildren: () => import('./pages/products-list/products-list.module').then(m => m.ProductsListModule)
  },
  {
    path: 'users-list',
    // component: UsersListComponent
    loadChildren: () => import('./pages/users-list/users-list.module').then(m=> m.UsersListModule)
  },
  {
    path: 'settings',
    // component: SettingsComponent
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
