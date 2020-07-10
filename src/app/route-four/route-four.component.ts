import { Component, OnInit } from '@angular/core';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-route-four',
  templateUrl: './route-four.component.html',
  styleUrls: ['./route-four.component.css'],
  providers: [TimerService],
})
export class RouteFourComponent implements OnInit {
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

  resetTimer() {
    this.timer.unsubscribe();
    this.startTimer();
  }

  pause(){
    this.timer.unsubscribe();
   // this.startService();
  }

  // startService(){
  //  let that = this;
  //   setTimeout(function () {
  //     that._timerService.start(that.count).subscribe((data) => {
  //       that.count = data
  //     })
  //     console.log(that, 'bootom')
  //     // timer();
  //    }, 1000);
    
   
 // }
}


