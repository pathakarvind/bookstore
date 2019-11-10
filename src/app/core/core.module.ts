import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavgationBarComponent } from './components/navgation-bar/navgation-bar.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    NavgationBarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    PageNotFoundComponent,
    NavgationBarComponent
  ]
})
export class CoreModule { }
