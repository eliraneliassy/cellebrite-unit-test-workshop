import { FeedService } from './feed.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  fashionItems$: Observable<Item[]>;
  sportItems$: Observable<Item[]>;
  constructor(private feedSerivce: FeedService) { }

  ngOnInit() {
    this.fashionItems$ = this.feedSerivce.getFeed(0, 'fashion');
    this.sportItems$ = this.feedSerivce.getFeed(0, 'sports_outdoors');
  }


}
