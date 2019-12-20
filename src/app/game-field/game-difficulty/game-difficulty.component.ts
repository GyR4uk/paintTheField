import { Component } from "@angular/core";
import { GameService } from "src/app/shared/game.service";

@Component({
  selector: "game-diff",
  templateUrl: "./game-difficulty.component.html",
  styleUrls: ["./game-difficulty.component.css"]
})
export class GameDifficultyComoponent {
  constructor(private GameService: GameService) {}

  onSelectDifficulty(difficulty: 10 | 13 | 16) {
    this.GameService.startTheGame(difficulty);
  }
}
