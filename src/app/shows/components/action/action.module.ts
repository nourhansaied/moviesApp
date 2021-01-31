import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionComponent } from './action/action.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ActionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ActionComponent, pathMatch: 'full'}
    ])
  ]
})
export class ActionModule { }
