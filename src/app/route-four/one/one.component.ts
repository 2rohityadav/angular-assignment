import { Component, OnInit } from '@angular/core';
import {TimerService} from '../../services/timer.service'

@Component({
  selector: 'one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent implements OnInit {

  count = 0;
  
  timer;

 // countSubject = 0;

  constructor(private _timerService: TimerService) {
    // this._timerService.countSubject.subscribe(countval => {
    //   this.countSubject = countval
    // })
  }


  startTimer() {
    this.timer = this._timerService.source().subscribe((data) => {
      this.count = data;
    });
  }

  ngOnInit() {
    this.startTimer();
  }



}


