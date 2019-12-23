import { Component, Input } from "@angular/core";
import { ChatService } from "src/app/shared/chat.service";

@Component({
  selector: "chat-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class MessageComponent {
  constructor(private ChatService: ChatService) {}
  @Input() data: {
    user: string;
    game: string;
    text: string;
    time: string;
    isMine: boolean;
  };
}
