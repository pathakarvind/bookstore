import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatTableDataSource, PageEvent } from '@angular/material';

import { InventoryService } from './services/inventory.service';
import { Book, BookStore } from './models/inventory.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit, OnDestroy {
  books: Book[];
  searchCtrl: FormControl = new FormControl();
  booksSubs: Subscription;
  pagingOptions: PageEvent = { pageSize: 100, length: 0, pageIndex: 0 };

  constructor(public inventoryService: InventoryService) { }

  ngOnInit() {
  }

  getBooks(paging: PageEvent = null) {
    console.log(paging);
    this.booksSubs = this.inventoryService.getBooks(this.searchCtrl.value, paging ? paging.pageIndex + 1 : 1).subscribe((bookStore: BookStore) => {
      this.pagingOptions.length = bookStore.numFound;
      this.books = bookStore.docs;
    });
  }

  onAddFaviourites(book: Book) {
    this.inventoryService.addFaviourite(book);
  }

  ngOnDestroy() {
    this.booksSubs && this.booksSubs.unsubscribe();
  }

}
