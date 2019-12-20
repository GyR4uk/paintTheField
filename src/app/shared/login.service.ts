import { ChatService } from "./chat.service";

export class LoginService {
  constructor(private ChatService: ChatService) {}
  isLogged: boolean = false;

  public _login(name: string): void {
    this.ChatService.setLoginName(name);
    this.isLogged = true;
  }

  public _logOut(): void {
    this.isLogged = false;
    this.ChatService.arrayOfMesages = [];
  }
}
