import { Component } from "@angular/core";
import { GameService } from "../shared/game.service";

@Component({
  selector: "app-game-filed",
  template: `
    <div class="wrapper">
      <div class="game">
        <div class="field">
          <game-cell
            *ngFor="let x of GameService.arrayOfCells; let i = index"
            [data]="x"
            [index]="i"
          ></game-cell>
        </div>
        <game-color-panel></game-color-panel>
      </div>
    </div>
  `,
  styles: [
    ".field { display: grid; grid-template-columns: .1fr .1fr .1fr .1fr .1fr .1fr .1fr .1fr .1fr .1fr; grid-gap: 2px; width: 540px; }",
    ".field div { width: 50px; height: 50px; }",
    ".wrapper { width: 65vw; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; }",
    `
      .game {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `
  ]
})
export class GameFiled {
  constructor(private GameService: GameService) {
    GameService._initArray(10);
  }
}
