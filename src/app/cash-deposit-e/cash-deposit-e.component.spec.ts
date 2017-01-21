/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CashDepositEComponent } from './cash-deposit-e.component';

describe('CashDepositEComponent', () => {
  let component: CashDepositEComponent;
  let fixture: ComponentFixture<CashDepositEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashDepositEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashDepositEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
