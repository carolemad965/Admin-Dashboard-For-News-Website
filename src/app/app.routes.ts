import { Routes } from '@angular/router';
import { NewsHomeComponent } from './news-home/news-home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AuthorHomeComponent } from './author-home/author-home.component';


export const routes: Routes = [

    { path: '', component: AdminHomeComponent },
    { path: 'home', component: AdminHomeComponent },
    { path: 'news', component: NewsHomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'news-details/:id', component: NewsDetailsComponent },
    { path: 'author', component:AuthorHomeComponent },
   
];
