import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FundacionComponent } from './fundacion.component';

@NgModule({
  declarations: [FundacionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FundacionComponent }])
  ]
})
export class FundacionModule { }
