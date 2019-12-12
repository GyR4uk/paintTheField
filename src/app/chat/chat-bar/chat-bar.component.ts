import { Component } from "@angular/core";
import { ChatService } from "src/app/shared/chat.service";

@Component({
  selector: "chat-bar",
  template: `
    <div class="wrapper">
      <div class="stics">
        <img src="assets/smile.svg" style="width: 35px; cursor: pointer;" />
      </div>
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
        justify-content: space-between;
        align-items: center;
        height: 10%;
        background: rgba(6, 123, 123, 0.12);
      }
    `,
    `
      .stics {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10%;
        height: 40px;
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
        width: 70%;
      }
    `
  ]
})
export class ChatMessageBar {
  constructor(private ChatService: ChatService) {}

  text = "";
  sendMessage(text: string) {
    if (text.length !== 0) {
      this.ChatService._createMessage(text);
      this.text = "";
    }
  }

  onInput(event) {
    if (event.code === "Enter") {
      this.sendMessage(event.target.value);
    }
  }
}
