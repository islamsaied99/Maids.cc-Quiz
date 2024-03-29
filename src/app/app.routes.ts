import { Routes } from '@angular/router';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export const routes: Routes = [

    {path:"" , component:IndexPageComponent},
    {path:"user/:id" , component:UserDetailsComponent}
];
