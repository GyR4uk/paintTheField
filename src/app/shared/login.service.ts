import { ChatService } from "./chat.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

export class LoginService {
  constructor(private ChatService: ChatService, private http: HttpClient) {}
  isLogged: boolean = false;

  public _login(name: string): void {
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    this.http
      .post("http://localhost:8080/api/users", JSON.stringify({ name }), {
        headers
      })
      .toPromise()
      .then(
        response => {
          this.isLogged = true;
          this.ChatService.inrevalMessage();
        },
        request => {
          if (!name) {
            alert("Введите имя!");
          } else {
            alert("Ошибка входа. Нет соединения с интернетом!");
          }
        }
      );
  }

  public _logOut(): void {
    this.http.delete("http://localhost:8080/api/users").subscribe(_ => {
      this.isLogged = false;
    });
  }
}
