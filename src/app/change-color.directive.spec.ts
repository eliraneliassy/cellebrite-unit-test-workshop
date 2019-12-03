import { ChangeColorDirective } from './change-color.directive';
import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `
  <div appChangeColor>color should be red</div>
  <div >no bg color</div>
  `
})
class TestComponent { }

describe('ChangeColorDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let el: DebugElement;

  beforeEach(async(() => {

    TestBed.configureTestingModule({

      declarations: [
        TestComponent, ChangeColorDirective
      ],

    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement;

    fixture.detectChanges();
  }));
  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should change the div background to red', () => {
    const elements = el.query(By.directive(ChangeColorDirective));

    expect(elements).toBeTruthy();

    expect(elements.nativeElement.style.backgroundColor).toEqual('red');

    const item = el.query(By.css('div:not([appChangeColor])'));
    expect(item.nativeElement.style.backgroundColor).toEqual('');
  });
});
