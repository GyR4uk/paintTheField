import { Component } from "@angular/core";
import { LeaderBoardService } from "src/app/shared/leader-board.service";

@Component({
  selector: "control-leaders-table",
  templateUrl: "./control-leader-table.component.html",
  styleUrls: ["./control-leader-table.component.css"],
  providers: [LeaderBoardService]
})
export class LeaderTableComponent {
  constructor(private LeaderBoardService: LeaderBoardService) {}

  show: boolean = false;
  onClick(): void {
    this.show = !this.show;
  }

  place: string[] = [
    "assets/gold-medal.svg",
    "assets/second.svg",
    "assets/third.svg",
    "assets/no-medal.svg"
  ];

  getPlace(index: number): string {
    if (index < 3) {
      return this.place[index];
    } else {
      return this.place[3];
    }
  }
}
