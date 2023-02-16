import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [

    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'app',
        loadChildren: () => {
            return import('./modules/base-app/base-app.module').then((m) => m.BaseAppModule)
        }
    },
    {
        path: 'login',
        loadChildren: () => {
            return import('./modules/authentication/authentication.module').then((m) => m.AuthenticationModule);
        }
    },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingMoudle { }