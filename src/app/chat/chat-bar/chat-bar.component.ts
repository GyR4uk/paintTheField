import { Component } from "@angular/core";
import { ChatService } from "src/app/shared/chat.service";

@Component({
  selector: "chat-bar",
  templateUrl: "./chat-bar.component.html",
  styleUrls: ["./chat-bar.component.css"]
})
export class ChatMessageBar {
  constructor(private ChatService: ChatService) {}

  text = "";
  sendMessage(text: string): void {
    if (text.length !== 0) {
      this.ChatService._createMessage(text);
      this.text = "";
    }
  }

  onInput(event): void {
    if (event.code === "Enter") {
      this.sendMessage(event.target.value);
    }
  }
}
