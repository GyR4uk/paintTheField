import { Component } from "@angular/core";
import { GameService } from "../shared/game.service";
import { LoginService } from "../shared/login.service";

@Component({
  selector: "app-controls",
  templateUrl: "./controls.component.html",
  styleUrls: ["./controls.component.css"]
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
    this.GameService.restartTheGame();
  }
}
