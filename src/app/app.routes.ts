import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:"", component: WelcomePageComponent,},

    {path:"**", component: PageNotFoundComponent,},
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes
        )
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
