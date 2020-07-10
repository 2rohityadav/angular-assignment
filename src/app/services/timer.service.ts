import { Injectable } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  countDown = timer(1000, 2000);

  source(): Observable<any> {
    return this.countDown;
  }

  logTimer() {
    return this.countDown.pipe(take(4));
  }
  

//   start(i): Observable<any> {
//     (function timer() {
//       if (--i < 0) return;
//       setTimeout(function () {
//        // console.log(i);
//         timer();
//       }, 1000);
//     })();
//   }

// start(i): Observable<any>{
//     if (--i < 0) return;

//     return i;
// }

// public countSubject = new Subject<any>();

}
