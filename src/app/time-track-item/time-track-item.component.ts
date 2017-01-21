import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-time-track-item',
  templateUrl: './time-track-item.component.html',
  styleUrls: ['./time-track-item.component.css']
})
export class TimeTrackItemComponent implements OnInit {
  tick:number = 0;
  isPaused:boolean = true;
  isFirstTime:boolean = true;
  intervalId:any;

  @Input()
  taskDesc:string = '';
  @Input()
  prevTick:TimeTrackItemComponent;
  @Input()
  nextTick:TimeTrackItemComponent;

  @Output()
  status = new EventEmitter();

  @Output()
  incrementTick = new EventEmitter();


  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.setTick();
    }, 1000);
  }

  startTimer() {
    if (this.intervalId) {
      this.isPaused = false;
      this.isFirstTime = false;
      this.status.emit({prev: this.prevTick, next: this.nextTick});
    }
  }

  stopTimer() {
    if (this.intervalId) {
      this.isPaused = true;
    }
  }

  setTick() {
    if (!this.isPaused) {
      this.tick++;
      this.incrementTick.emit(1);
    }
  }
}
