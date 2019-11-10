import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator'
import { MatTableModule } from '@angular/material';

import { InventoryComponent } from './inventory.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { InventoryRoutingModule } from './inventory-routing.module';
import { BookGridComponent } from './book-grid/book-grid.component';

@NgModule({
  declarations: [InventoryComponent, FavouritesComponent, BookGridComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class InventoryModule { }
