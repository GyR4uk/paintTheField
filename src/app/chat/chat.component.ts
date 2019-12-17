import { Component } from "@angular/core";
import { ChatService } from "../shared/chat.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent {
  constructor(private ChatService: ChatService) {}
}
