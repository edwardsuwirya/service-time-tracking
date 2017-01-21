/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CashDepositBComponent } from './cash-deposit-b.component';

describe('CashDepositBComponent', () => {
  let component: CashDepositBComponent;
  let fixture: ComponentFixture<CashDepositBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashDepositBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashDepositBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
