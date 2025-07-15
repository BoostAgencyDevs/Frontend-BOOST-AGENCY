import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FuturoComponent } from './futuro.component';

@NgModule({
  declarations: [FuturoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FuturoComponent }])
  ]
})
export class FuturoModule { }
