import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book, BookStore } from '../models/inventory.model';
import { InventoryConstants } from '../constants/inventory.constant';
import { UtilService } from '../../core/services/util.service';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private favouriteBooks: Book[] = [];
  favouriteBooksSubject: ReplaySubject<Book[]> = new ReplaySubject();

  constructor(private httpClient: HttpClient, private utilService: UtilService) { }

  getBooks(query: string, pageIndex: number = 1): Observable<BookStore> {
    const resourceURL = this.utilService.getResourceURL(InventoryConstants.GET_BOOKS) + query + '&page=' + pageIndex;
    return this.httpClient.get<BookStore>(resourceURL);
  }

  addFaviourite(book: Book) {
    if (this.isFavourite(book.key) === -1) this.favouriteBooks.push(book);
    this.broadCastFavourites();
  }

  removeFaviourite(book: Book) {
    const removeIndex = this.isFavourite(book.key);
    if (removeIndex !== -1) this.favouriteBooks.splice(removeIndex, 1);
    this.broadCastFavourites();
  }

  broadCastFavourites() {
    this.favouriteBooksSubject.next([...this.favouriteBooks]);
  }

  isFavourite(key: string) {
    return this.favouriteBooks.findIndex((book: Book) => book.key === key);
  }

  getFavouritesLength() {
    return this.favouriteBooks.length;
  }

}
