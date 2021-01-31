import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComedyComponent } from './comedy/comedy.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ComedyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ComedyComponent, pathMatch: 'full'}
    ])
  ]
})
export class ComedyModule { }
