import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css'],
})
export class CompOneComponent implements OnInit {
  countDown:number = 0;

  @Output() childaccess = new EventEmitter<number>();
  @Input() comOne;

  ngOnInit() {
    setInterval(() => {
      this.countDown++;
      this.childaccess.emit(this.countDown);
    }, 1000);
  }
}
