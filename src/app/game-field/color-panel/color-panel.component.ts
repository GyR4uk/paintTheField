import { Component } from "@angular/core";
import { GameService } from "src/app/shared/game.service";

@Component({
  selector: "game-color-panel",
  template: `
    <div class="color-panel">
      <div
        *ngFor="let color of GameService.ARRAY_OF_COLORS"
        (click)="onClick(color)"
        [ngStyle]="{
          background: color
        }"
      ></div>
    </div>
  `,
  styles: [
    `
      .color-panel {
        width: 300px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin: 30px auto;
        grid-column: 2;
      }
    `,
    `
      .color-panel div {
        width: 50px;
        height: 50px;
        justify-self: center;
        box-sizing: border-box;
        border: 2px #999;
        border-radius: 50%;
        cursor: pointer;
      }
    `
  ]
})
export class ColorPanel {
  constructor(private GameService: GameService) {}

  onClick(color) {
    this.GameService.changeColor(color);
  }

  margin = "30px";
}
