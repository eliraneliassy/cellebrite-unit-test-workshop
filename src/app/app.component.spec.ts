import { sportsDB } from './sportsDB';
import { fashionDB } from './fashionDB';
import { FeedService } from './feed.service';
import { ItemComponent } from './item/item.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let feedService: FeedService;

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
        ItemComponent
      ],
      providers: [
        { provide: FeedService, useValue: feedServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    feedService = TestBed.get(FeedService);

    fixture.detectChanges();
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });


});
