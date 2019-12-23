import { HttpClient, HttpHeaders } from "@angular/common/http";

export class ChatService {
  constructor(private http: HttpClient) {}
  mess;
  arrayOfMesages = [];
  filtered: boolean = false;

  AUTHOR_NAME: string;

  public getCurrentTime(number: number): string {
    let date = new Date(number);

    let minutes =
      date.getMinutes().toString().length === 1
        ? "0" + date.getMinutes().toString()
        : date.getMinutes();
    let hours =
      date.getHours().toString().length === 1
        ? "0" + date.getHours().toString()
        : date.getHours();

    return `${hours}:${minutes}`;
  }

  public _createMessage(text: string): void {
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    this.http
      .post("http://localhost:8080/api/messages", JSON.stringify({ text }), {
        headers
      })
      .subscribe(data => {
        this.onGetMessages();
      });
  }

  onGetMessages() {
    if (!this.filtered) {
      this.http.get("http://localhost:8080/api/messages").subscribe(array => {
        this.mess = array;
        this.mess = this.mess.filter(el => el.game === "paintTheField");
      });
    } else {
      this.http.get("http://localhost:8080/api/messages").subscribe(array => {
        this.mess = array;
      });
    }
  }

  inrevalMessage() {
    let timer = setInterval(() => {
      this.onGetMessages();
    }, 1000);
  }

  setLoginName(name: string): void {
    this.AUTHOR_NAME = name;
  }
}
