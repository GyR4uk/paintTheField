import { Component } from "@angular/core";
import { ChatService } from "../shared/chat.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent {
  constructor(public ChatService: ChatService, private http: HttpClient) {
    this.http.get("http://localhost:8080/api/messages").subscribe(array => {
      this.ChatService.mess = array;
      //console.log(this.ChatService.mess);
    });
  }
}
