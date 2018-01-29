import {
    NgModule
} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
import {
    HelpComponent
} from './help.component';

const routes: Routes = [{
    path: '',
    component: HelpComponent,
    children: [{
        path: '',
        redirectTo: 'welcome'
    }, {
        path: 'welcome',
        loadChildren: './modules/welcome/welcome.module#WelcomeModule'
    }, {
        path: 'about',
        loadChildren: './modules/about/about.module#AboutModule'
    }, {
        path: 'document',
        loadChildren: './modules/document/document.module#DocumentModule'
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HelpRouting { }
