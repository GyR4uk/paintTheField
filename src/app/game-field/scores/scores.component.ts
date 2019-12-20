import { Component } from "@angular/core";
import { GameService } from "src/app/shared/game.service";

@Component({
  selector: "game-scores",
  templateUrl: "./scores.component.html",
  styleUrls: ["./scores.component.css"]
})
export class ScoresComponent {
  constructor(private GameService: GameService) {}

  text = this.GameService.isEnd.toString();
}
