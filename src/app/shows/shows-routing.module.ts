import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowsComponent } from './shows/shows.component';

const routes: Routes = [
  {
    path: '', component: ShowsComponent,
    children: [
      { path: 'shows/comedy', loadChildren: () => import('./components/comedy/comedy.module').then(m => m.ComedyModule) },
      { path: 'action', loadChildren: './components/action/action.module#ActionModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ShowsRoutingModule { }
