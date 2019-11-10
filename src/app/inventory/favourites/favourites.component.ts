import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service';
import { Book } from '../models/inventory.model';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor(public inventoryService: InventoryService) { }

  ngOnInit() {
  }

  onRemoveToFavourites(book: Book) {
    this.inventoryService.removeFaviourite(book);
  }

}
