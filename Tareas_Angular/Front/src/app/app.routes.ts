import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModificationComponent } from './modification/modification.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/login'},
    {path: 'home', component: HomeComponent},
    { path: 'modification', component: ModificationComponent },
    {path: 'login', component: LoginComponent},

];

RouterModule.forRoot(routes);
