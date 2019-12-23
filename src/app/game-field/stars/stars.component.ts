import { Component, Input,  OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: "app-stars",
  templateUrl: "./stars.component.html",
  styleUrls: ["./stars.component.css"],
  animations: [
    trigger('endAnimation', [
      state('end', style({
        transform: 'rotate(360deg)'
      })),
      transition('* => end', animate('750ms'))])
  ]
})
export class StarsComponent implements OnInit {
  @Input() count: number;
  maxSeconds = 30;
  seconds = 30;
  stars: Array<any>;
  currentStar: number;
  ngOnInit(): void {
    this.stars = Array(this.count).fill(0).map((x,i)=>({
      width: 100
    }));
    setInterval(() => {
      this.seconds--;
      
      let partSize = this.maxSeconds / this.count;
      const currentStarIndex = Math.ceil(this.seconds / partSize) - 1;
      this.stars[currentStarIndex].width = this.seconds % partSize ? ((this.seconds % partSize) / partSize) * 100 : 100;
      
    }, 1000)
  }
}
