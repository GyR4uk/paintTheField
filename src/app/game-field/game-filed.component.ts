import { Component } from "@angular/core";
import { GameService } from "../shared/game.service";

@Component({
  selector: "app-game-filed",
  templateUrl: "./game-field.component.html",
  styleUrls: ["./game-field.component.css"]
})
export class GameFiled {
  constructor(public GameService: GameService) {
    GameService._initArray();
  }
}
