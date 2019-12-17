import { Component } from "@angular/core";
import { GameService } from "src/app/shared/game.service";

@Component({
  selector: "game-color-panel",
  templateUrl: "./color-panel.component.html",
  styles: [
    `
      .color-panel {
        display: flex;
        width: 540px;
        justify-content: center;
        align-items: center;
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
        margin: 0 12px;
      }
    `
  ]
})
export class ColorPanel {
  arrayOfColors = [];
  constructor(private GameService: GameService) {
    for (
      let i = 0;
      i < this.GameService._colors[this.GameService.GAME_DIFFICULTY];
      i++
    ) {
      this.arrayOfColors.push(this.GameService.ARRAY_OF_COLORS[i]);
    }
  }

  onClick(color: string): void {
    this.GameService.changeColor(color);
  }
}
