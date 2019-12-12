import { Component, Input } from "@angular/core";

@Component({
  selector: "game-cell",
  template: `
    <div [ngStyle]="{ background: cell.color }" (click)="onClick(cell)"></div>
  `,
  styles: [
    "div { width: 50px; height: 50px; box-sizing: border-box; border: 1px solid #999; border-radius: 5px; }"
  ]
})
export class GameCell {
  @Input("data") cell: any;
  @Input("index") index: number;

  onClick(cell) {
    console.log(cell, this.index);
  }
}
