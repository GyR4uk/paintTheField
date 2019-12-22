import { Component } from "@angular/core";
import { GameService } from "src/app/shared/game.service";

@Component({
  selector: "game-color-panel",
  templateUrl: "./color-panel.component.html",
  styleUrls: ["./color-panel.component.css"]
})
export class ColorPanel {
  constructor(public GameService: GameService) {}

  onClick(color: string): void {
    this.GameService.changeColor(color);
  }

  onRestart(): void {
    this.GameService.restartTheGame();
  }
}
