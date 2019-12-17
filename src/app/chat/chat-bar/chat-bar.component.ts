import { Component } from "@angular/core";
import { ChatService } from "src/app/shared/chat.service";

@Component({
  selector: "chat-bar",
  template: `
    <div class="wrapper">
      <input type="text" [(ngModel)]="text" (keydown)="onInput($event)" />
      <div class="send-message" (click)="sendMessage(this.text)">
        <img src="assets/send.svg" style="width: 35px;" />
      </div>
    </div>
  `,
  styles: [
    `
      * {
        box-sizing: border-box;
      }
    `,

    `
      .wrapper {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 10%;
        background: rgba(6, 123, 123, 0.12);
      }
    `,
    `
      .send-message {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15%;
        height: 40px;
        border: 2px solid #027271;
        border-radius: 15px;
        cursor: pointer;
      }
    `,
    `
      input {
        border: 2px solid #027271;
        font-size: 19px;
        padding: 8px;
        outline: none;
        border-radius: 10px;
        width: 80%;
      }
    `
  ]
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
