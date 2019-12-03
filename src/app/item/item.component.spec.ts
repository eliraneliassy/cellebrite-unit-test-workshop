import { DiscountPipe } from './../discount.pipe';
import { fashionDB } from './../fashionDB';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CurrencyPipe, formatCurrency } from '@angular/common';
import { Item } from '../item.interface';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemComponent, DiscountPipe]
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
    const pipe = new CurrencyPipe('en');
    expect(price.nativeElement.innerText).toBe(pipe.transform(item.price));
  });

  it('should emit add to cart event - with spys', () => {
    const item = fashionDB[0];
    component.item = item;

    fixture.detectChanges();

    spyOn(component.addToCart, 'emit');

    component.addToCartClicked();

    expect(component.addToCart.emit).toHaveBeenCalledTimes(1);
  });

  it('should emit add to cart event - with subscribe', () => {
    const item = fashionDB[0];
    component.item = item;

    fixture.detectChanges();

    component.addToCart.subscribe((res: Item) => {
      expect(res._id).toEqual(item._id);
    });

    component.addToCartClicked();
  });
});
