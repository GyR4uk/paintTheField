import { Component, Input } from "@angular/core";

@Component({
  selector: "chat-message",
  template: `
    <div [ngClass]="{ wrap: data.mine, 'from-wrap': !data.mine }">
      <div [ngClass]="{ message: data.mine, 'from-message': !data.mine }">
        <div [ngClass]="{ name: data.mine, 'from-name': !data.mine }">
          {{ data.author }}
        </div>
        <div class="text">{{ data.content }}</div>
        <div [ngClass]="{ time: data.mine, 'from-time': !data.mine }">
          {{ data.time }}
        </div>
      </div>
      <div [ngClass]="{ circle: data.mine, 'from-circle': !data.mine }"></div>
    </div>
  `,
  styleUrls: ["./message.component.css"]
})
export class MessageComponent {
  @Input() data;
}
