import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css'],
})
export class CompTwoComponent implements OnInit {

  @Input() comTwo;
  @Output() reverseTimer = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  start() {
    var i = this.comTwo;
    (function timer() {
      if (--i < 0) return;
      setTimeout(function () {
         console.log(i);
        this.reverseTimer.emit(i)
        timer();
      }, 1000);
    })();
  }
}
