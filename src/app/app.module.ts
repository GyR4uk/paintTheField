import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { GameFiled } from "./game-field/game-filed.component";
import { GameCell } from "./game-field/cell/cell.component";
import { ColorPanel } from "./game-field/color-panel/color-panel.component";
import { ChatComponent } from "./chat/chat.component";
import { ControlsComponent } from "./controls/controls.component";
import { GameService } from "./shared/game.service";
import { ChatMessageBar } from "./chat/chat-bar/chat-bar.component";
import { MessageComponent } from "./chat/message/message.component";
import { LoginScreenComponent } from "./login-screen/login-screen.component";
import { ScoresComponent } from './game-field/scores/scores.component';
import { StarsComponent } from './game-field/stars/stars.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    GameFiled,
    GameCell,
    ColorPanel,
    ChatComponent,
    ControlsComponent,
    ChatMessageBar,
    MessageComponent,
    LoginScreenComponent,
    ScoresComponent,
    StarsComponent,
    LeaderboardComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule {}
