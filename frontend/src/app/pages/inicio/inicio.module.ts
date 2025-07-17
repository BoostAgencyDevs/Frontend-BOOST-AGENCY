import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

const routes: Routes = [
  { path: '', component: InicioComponent }
];

@NgModule({
  declarations: [
    InicioComponent,
    SafeUrlPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InicioModule { } 