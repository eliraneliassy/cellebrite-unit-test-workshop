import { DiscountPipe } from './discount.pipe';
import { sportsDB } from './sportsDB';
import { fashionDB } from './fashionDB';
import { FeedService } from './feed.service';
import { ItemComponent } from './item/item.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, ComponentFixture, fakeAsync, flush, flushMicrotasks } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let feedService: FeedService;
  let el: DebugElement;

  beforeEach(async(() => {
    const feedServiceMock = {
      getFeed: (page, category) => {
        return category === 'fashion' ? of(fashionDB) : of(sportsDB);
      }
    } as any;

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatTabsModule,
        NoopAnimationsModule
      ],
      declarations: [
        AppComponent,
        ItemComponent,
        DiscountPipe
      ],
      providers: [
        { provide: FeedService, useValue: feedServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    feedService = TestBed.get(FeedService);
    el = fixture.debugElement;

    fixture.detectChanges();
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should render the component with fashion items and 2 tabs', () => {

    feedService.getFeed(0, 'fashion').subscribe(res => {

      const items = el.queryAll(By.css('.col-3'));
      const firstItem = items[0];
      const titleOfFirstItem = firstItem.query(By.css('.title'));
      expect(titleOfFirstItem.nativeElement.innerText)
        .toEqual(fashionDB[0].description);

      expect(items.length).toEqual(fashionDB.length);

      const tabs = el.queryAll(By.css('.mat-tab-label'));

      expect(tabs.length).toEqual(2);

    });

  });

  it('should show sports items after clicking the sports tab', fakeAsync(() => {

    feedService.getFeed(0, 'sports').subscribe(res => {

      const tabs = el.queryAll(By.css('.mat-tab-label'));

      tabs[1].nativeElement.click();

      fixture.detectChanges();

      flush();

      const items = el.queryAll(By.css('.col-3'));
      const firstItem = items[0];

      const titleOfFirstItem = firstItem.query(By.css('.title'));
      expect(titleOfFirstItem.nativeElement.innerText)
        .toEqual(sportsDB[0].description);

      expect(items.length).toEqual(sportsDB.length);

    });


  }));


});
