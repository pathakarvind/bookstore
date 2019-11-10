import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import { FavouritesComponent } from './favourites/favourites.component';


const routes: Routes = [
    { path: '', component: InventoryComponent },
    { path: 'favourites', component: FavouritesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: []
})
export class InventoryRoutingModule { }