import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { HomeComponent } from './core/components/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'inventory', loadChildren: './inventory/inventory.module#InventoryModule'},
  {path: '*', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
