import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users.component';

import { RegisterComponent } from './register/register.component';
import { AuthGuradGuard } from './auth-gurad.guard';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [

  { path: '',  redirectTo:'home' , pathMatch:'full'},
  { path: 'home', component: HomeComponent, canActivate:[AuthGuradGuard] },

  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'movie-details/:movieID', component: MovieDetailsComponent },
  // { path: 'shows', loadChildren: () => import('./shows/shows.module').then(m => m.ShowsModule) },
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
