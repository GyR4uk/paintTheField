import { Component, Input,  OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { GameService } from "src/app/shared/game.service";

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
  constructor(public GameService: GameService) {}

  ngOnInit(): void {
    switch (this.GameService.GAME_DIFFICULTY) {
      case 10: {
        this.maxSeconds = 180;
        break;
      }
      case 13: {
        this.maxSeconds = 120;
        break;
      }
      case 16: {
        this.maxSeconds = 60;
        break;
      }
    }
    this.seconds = this.maxSeconds;
    this.stars = Array(this.count).fill(0).map((x,i)=>({
      width: 100
    }));
    const timer = setInterval(() => {
      this.seconds--;
      
      let partSize = this.maxSeconds / this.count;
      const currentStarIndex = Math.ceil(this.seconds / partSize) - 1;
      this.stars[currentStarIndex].width = this.seconds % partSize ? ((this.seconds % partSize) / partSize) * 100 : 100;
      
      this.GameService.scoreFactor = this.seconds / partSize;

      if (this.seconds === 0) {
        clearInterval(timer);
      }
    }, 1000)
  }
}
