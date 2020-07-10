import { Component, OnInit } from '@angular/core';
import {TimerService} from '../../services/timer.service'

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  count = 0;
  timer;

  //countSubject = 0;

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

  resetTimer() {
    
    this.timer.unsubscribe();
    this.startTimer();
  }

  pause(){
    this.timer.unsubscribe();
   // this.startService();
  }

  // pause(countval){
  //   this._timerService.countSubject.next(countval.value)
 
  // }

}
