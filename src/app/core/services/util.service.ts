import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  getResourceURL(url: string, isAsset: boolean = false) {
    return (isAsset ? environment.ASSET_URL + 'json/' : environment.BASE_URL) + url;
  }
}
