import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
