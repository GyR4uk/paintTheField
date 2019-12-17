import { Component } from "@angular/core";

@Component({
  selector: "game-scores",
  templateUrl: "./scores.component.html",
  styleUrls: ["./scores.component.css"]
})
export class ScoresComponent {
  constructor() {}

  text = "Тут должен быть счет!";
}
