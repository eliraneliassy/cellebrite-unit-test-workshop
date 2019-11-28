import { Item } from './item.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private httpClient: HttpClient) { }

  getFeed(page: number, categories: string): Observable<Item[]> {
    let params = new HttpParams();
    params = params.append('page', '0');
    params = params.append('categories', categories);

    return this.httpClient.get<Item[]>('https://api.fashbash.co/api/feed', { params });
  }
}
