import {Component, ViewChild} from '@angular/core';
import {CashDepositTimetrackingComponent} from "./cash-deposit-timetracking/cash-deposit-timetracking.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('edo')
  cashDepostioTimeTracking:CashDepositTimetrackingComponent;
  total:number = 0;

  cdA:boolean = true;
  cdB:boolean = false;
  cdC:boolean = false;
  cdD:boolean = false;
  cdE:boolean = false;

  activePage:string = 'cd0';
  iActivePage:number = 0;
  serviceTitle:string = 'Cash Deposit Service'

  constructor() {
  }

  next() {
    this.iActivePage++;
    this.activePage = 'cd' + this.iActivePage;
    console.log(this.activePage);
    this.cashDepostioTimeTracking.next();
  }

  prev() {
    this.iActivePage--;
    this.activePage = 'cd' + this.iActivePage;
    console.log(this.activePage);
    this.cashDepostioTimeTracking.prev();
  }

  updateTotal(event) {
    this.total = event;
  }
}
