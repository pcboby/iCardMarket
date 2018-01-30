/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppMarketComponent } from './appMarket.component';

describe('AppMarketComponent', () => {
  let component: AppMarketComponent;
  let fixture: ComponentFixture<AppMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
