import { Component, Input } from "@angular/core";

@Component({
  selector: "chat-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class MessageComponent {
  @Input() data: {
    author: string;
    content: string;
    time: string;
    mine: boolean;
  };
}
