import { Component } from "@angular/core";
import { GameService } from "src/app/shared/game.service";

@Component({
  selector: "game-color-panel",
  templateUrl: "./color-panel.component.html",
  styleUrls: ["./color-panel.component.css"]
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
