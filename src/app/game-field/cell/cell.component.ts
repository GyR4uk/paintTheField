import { Component, Input } from "@angular/core";
import { GameService } from "src/app/shared/game.service";

@Component({
  selector: "game-cell",
  templateUrl: "./cell.component.html",
  styleUrls: ["./cell.component.css"]
})
export class GameCell {
  constructor(public GameService: GameService) {}
  @Input("data") cell: { color: string; active: boolean };
  @Input("index") index: number;
}
