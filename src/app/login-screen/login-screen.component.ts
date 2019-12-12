import { Component } from "@angular/core";
import { LoginService } from "../shared/login.service";

@Component({
  selector: "app-login-screen",
  template: `
    <div style="width: 300px; height: 300px; margin: calc(50vh - 150px) auto;">
      <input type="text" #userName />
      <button (click)="onLogin(userName.value)">Логин</button>
    </div>
  `,
  styles: [
    `
      .wrapper {
        width: 300px;
        height: 300px;
        margin: calc(50vh - 150px) auto;
        border: 2px solid;
        border-radius: 15px;
      }
    `,
    ``
  ]
})
export class LoginScreenComponent {
  constructor(private LoginService: LoginService) {}

  onLogin(name: string): void {
    this.LoginService._login(name);
  }
}
