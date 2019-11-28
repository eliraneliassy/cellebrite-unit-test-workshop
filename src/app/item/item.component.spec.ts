import { fashionDB } from './../fashionDB';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the item', () => {
    const item = fashionDB[0];

    component.item = item;

    fixture.detectChanges();

    const title: DebugElement = fixture.debugElement.query(By.css('.title'));
    expect(title.nativeElement.innerText).toBe(item.description);

    const image: DebugElement = fixture.debugElement.query(By.css('img'));
    expect(image.nativeElement.src).toBe(item.imageUrl);

    const price: DebugElement = fixture.debugElement.query(By.css('.price'));
    expect(price.nativeElement.innerText).toBe(item.price);
  });
});
