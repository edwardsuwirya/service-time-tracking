import {Component, OnInit, ViewChild, Output, AfterViewInit, AfterViewChecked} from '@angular/core';
import {TimeTrackItemComponent} from "../time-track-item/time-track-item.component";
import {EventEmitter} from "@angular/common/src/facade/async";

@Component({
  selector: 'app-cash-deposit-timetracking',
  templateUrl: './cash-deposit-timetracking.component.html',
  styleUrls: ['./cash-deposit-timetracking.component.css']
})
export class CashDepositTimetrackingComponent implements OnInit,AfterViewInit {
  @ViewChild('tick1')
  tick11:TimeTrackItemComponent;

  @Output()
  total = new EventEmitter();

  lastTick:TimeTrackItemComponent;
  activeTick:TimeTrackItemComponent;
  nextTick:TimeTrackItemComponent;
  tot:number = 0;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.tick11.startTimer();
      this.activeTick = this.tick11;
    }, 1);

  }

  next() {
    if (this.nextTick) {
      this.activeTick.stopTimer();
      this.activeTick = this.nextTick;
      this.activeTick.startTimer();
    }
  }

  prev() {
    if (this.lastTick) {
      this.activeTick.stopTimer();
      this.activeTick = this.lastTick;
      this.activeTick.startTimer();
    }
  }

  changeTick(event) {
    this.lastTick = event.prev;
    this.nextTick = event.next;
  }

  updateTotal(event) {
    this.tot = this.tot + event;
    this.total.emit(this.tot);
  }
}
