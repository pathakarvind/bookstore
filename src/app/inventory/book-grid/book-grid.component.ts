import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { InventoryConstants } from '../constants/inventory.constant';
import { Book } from '../models/inventory.model';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.css']
})
export class BookGridComponent implements OnInit {
  @Input() inventoryData: MatTableDataSource<Book>;
  @Output() addToFavourites: EventEmitter<Book> = new EventEmitter();
  @Output() removeToFavourites: EventEmitter<Book> = new EventEmitter();
  displayedColumns: string[] = [...InventoryConstants.INENTORY_COLUMNS];
  showAddBtn: boolean;

  constructor() { }

  ngOnInit() {
    this.toggelFavouriteColumn();
  }

  toggelFavouriteColumn() {
    this.showAddBtn = this.addToFavourites.observers.length > 0;
    /* if (!this.showAddBtn)
      this.displayedColumns.splice(3, 1); */
  }

  onAdd(book: Book) {
    this.addToFavourites.emit(book);
  }

  onRemove(book: Book) {
    this.removeToFavourites.emit(book);
  }

}
