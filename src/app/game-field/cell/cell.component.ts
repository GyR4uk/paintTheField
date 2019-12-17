import { Component, Input } from "@angular/core";

@Component({
  selector: "game-cell",
  templateUrl: "./cell.component.html",
  styleUrls: ["./cell.component.css"]
})
export class GameCell {
  @Input("data") cell: { color: string; active: boolean };
  @Input("index") index: number;

  onClick(cell) {
    console.log(cell, this.index);
  }
}
