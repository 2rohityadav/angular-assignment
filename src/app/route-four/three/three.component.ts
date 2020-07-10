import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'],
  providers: [TimerService],
})
export class ThreeComponent implements OnInit {
  count = 0;
  logs = [];
  timer;

  constructor(private _timerService: TimerService) {}

  startTimer() {
    this.timer = this._timerService.source().subscribe((data) => {
      this.count = data;
    });
  }

  ngOnInit() {
    this.startTimer();

    this._timerService.logTimer().subscribe(() => {
      this.logs.push(new Date());
    });
  }
}
