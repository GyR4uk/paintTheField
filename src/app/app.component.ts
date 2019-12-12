import { Component } from "@angular/core";
import { LoginService } from "./shared/login.service";
import { ChatService } from "./shared/chat.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [LoginService, ChatService]
})
export class AppComponent {
  constructor(private LoginService: LoginService) {}

  onLogin(name: string): void {
    this.LoginService._login(name);
  }
}
