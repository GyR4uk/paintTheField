import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "control-leaders-table",
  templateUrl: "./control-leader-table.component.html",
  styleUrls: ["./control-leader-table.component.css"]
})
export class LeaderTableComponent {
  arrayOfRecords;
  constructor(private http: HttpClient) {}

  show: boolean = false;
  onClick(): void {
    this.http
      .get("http://localhost:8080/api/records")
      .subscribe(arrayOfUsers => {
        this.arrayOfRecords = arrayOfUsers;
        this.show = !this.show;
      });
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
