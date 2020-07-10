import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-three',
  templateUrl: './route-three.component.html',
  styleUrls: ['./route-three.component.css']
})
export class RouteThreeComponent implements OnInit {

  public accessTimer;
  public reverseTimerForChild;

  constructor() { }

  sendDataToChild(data){
     this.accessTimer = data
  }

  reverseParentTimer(data){
      this.reverseTimerForChild = data
  }

  

  ngOnInit(): void {
  }

}
