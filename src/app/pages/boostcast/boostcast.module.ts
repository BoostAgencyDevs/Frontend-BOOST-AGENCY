import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BoostcastComponent } from './boostcast.component';

@NgModule({
  declarations: [BoostcastComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: BoostcastComponent }])
  ]
})
export class BoostcastModule { }
