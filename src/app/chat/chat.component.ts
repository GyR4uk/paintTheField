import { Component } from "@angular/core";
import { ChatService } from "../shared/chat.service";

@Component({
  selector: "app-chat",
  template: `
    <div class="top">Color Paint</div>
    <div class="messages">
      <chat-message
        *ngFor="let message of ChatService.arrayOfMesages"
        [data]="message"
      ></chat-message>
    </div>
    <chat-bar class="bar"></chat-bar>
  `,
  styles: [
    `
      @import url("https://fonts.googleapis.com/css?family=Lakki+Reddy&display=swap");
    `,
    `
      * {
        box-sizing: border-box;
      }
    `,
    `
      .top {
        font-family: "Lakki Reddy", cursive;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 5%;
        background: rgba(6, 123, 123, 0.64);
        font-size: 25px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
    `,
    `
      .bar {
        height: 10%;
        background: green;
        font-size: 25px;
      }
    `,
    `
      .messages {
        width: 100%;
        border-bottom: 2px solid #ccc;
        border-top: 2px solid #ccc;
        overflow-y: scroll;
        height: 85%;
        background: #fff;
      }
    `
  ]
})
export class ChatComponent {
  constructor(private ChatService: ChatService) {}
}
