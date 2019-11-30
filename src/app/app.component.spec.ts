import { sportsDB } from './sportsDB';
import { FeedService } from './feed.service';
import { ItemComponent } from './item/item.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, ComponentFixture, fakeAsync, flush } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { By } from '@angular/platform-browser';
import { fashionDB } from './fashionDB';
import { DebugElement } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

describe('AppComponent', () => {

  const feedServiceMock = {
    getFeed: (page, category) => {
      return category === 'fashion' ? of(fashionDB) : of(sportsDB);
    }
  };

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let el: DebugElement;
  let feedService: FeedService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatTabsModule,
        NoopAnimationsModule
      ],
      declarations: [
        AppComponent,
        ItemComponent
      ],
      providers: [
        { provide: FeedService, useValue: feedServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    el = fixture.debugElement;

    feedService = TestBed.get(FeedService);

    fixture.detectChanges();
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should render component with 12 items and 2 tabs', () => {

    feedService.getFeed(0, 'fashion').subscribe(res => {
      const items = el.queryAll(By.css('.col-3'));

      expect(items.length).toBe(12);

      const item = el.query(By.css('.col-3:first-child'));

      expect(item).toBeTruthy();

      const title = item.query(By.css('.title'));
      expect(title.nativeElement.textContent.trim())
        .toBe(fashionDB[0].description);

      const image = item.query(By.css('img'));
      expect(image.nativeElement.src).toBe(fashionDB[0].imageUrl);

      const tabs = el.queryAll(By.css('.mat-tab-label'));

      expect(tabs.length).toEqual(2);
    });

  });

  it('should show sports items after clicking on sports tabs', fakeAsync(() => {

    const tabs = el.queryAll(By.css('.mat-tab-label'));

    tabs[1].nativeElement.click();

    fixture.detectChanges();

    flush();

    const item = el.query(By.css('.col-3:first-child'));

    expect(item).toBeTruthy();

    const title = item.query(By.css('.title'));
    expect(title.nativeElement.textContent.trim())
      .toBe(sportsDB[0].description);

    const image = item.query(By.css('img'));
    expect(image.nativeElement.src).toBe(sportsDB[0].imageUrl);


  }));


});
