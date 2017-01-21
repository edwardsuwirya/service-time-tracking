import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {TimeTrackItemComponent} from './time-track-item/time-track-item.component';
import {CashDepositTimetrackingComponent} from './cash-deposit-timetracking/cash-deposit-timetracking.component';
import {TickFormatPipe} from './tick-format.pipe';
import {CashDepositAComponent} from './cash-deposit-a/cash-deposit-a.component';
import {CashDepositBComponent} from './cash-deposit-b/cash-deposit-b.component';
import {CashDepositCComponent} from './cash-deposit-c/cash-deposit-c.component';
import {CashDepositDComponent} from './cash-deposit-d/cash-deposit-d.component';
import {CashDepositEComponent} from './cash-deposit-e/cash-deposit-e.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeTrackItemComponent,
    CashDepositTimetrackingComponent,
    TickFormatPipe,
    CashDepositAComponent,
    CashDepositBComponent,
    CashDepositCComponent,
    CashDepositDComponent,
    CashDepositEComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
