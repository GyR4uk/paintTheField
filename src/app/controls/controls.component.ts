import { Component } from "@angular/core";
import { GameService } from "../shared/game.service";
import { LoginService } from "../shared/login.service";

@Component({
  selector: "app-controls",
  template: `
    <div class="contr">
      <img src="assets/house.svg" class="btn" (click)="onLogOut()" />
      <img
        src="assets/refresh.svg"
        class="btn reload"
        (click)="onRealodClick()"
      />
    </div>
  `,
  styles: [
    `
      .contr {
        width: 5vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
      }
    `,
    `
      .btn {
        margin-top: 10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
      }
    `,
    `
      .reload {
        width: 35px;
        height: 35px;
      }
    `
  ]
})
export class ControlsComponent {
  constructor(
    private GameService: GameService,
    private LoginService: LoginService
  ) {}

  onLogOut(): void {
    this.LoginService._logOut();
  }

  onRealodClick(): void {
    this.GameService._initArray();
  }
}
