import { ChatService } from "./chat.service";

export class LoginService {
  constructor(private ChatService: ChatService) {}
  isLogged: boolean = false;

  _login(name: string) {
    this.ChatService.setLoginName(name);
    this.isLogged = true;
  }

  _logOut() {
    this.isLogged = false;
    this.ChatService.arrayOfMesages = [];
  }
}
