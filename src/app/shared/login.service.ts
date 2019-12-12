import { ChatService } from "./chat.service";

export class LoginService {
  constructor(private ChatService: ChatService) {}
  isLogged = false;

  _login(name: string): void {
    this.ChatService.setLoginName(name);
    this.isLogged = true;
  }

  _logOut(): void {
    this.isLogged = false;
    this.ChatService.arrayOfMesages = [];
  }
}
