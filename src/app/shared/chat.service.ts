export class ChatService {
  arrayOfMesages: {
    author: string;
    content: string;
    time: string;
    mine: boolean;
  }[] = [
    {
      author: "Maximilian",
      content: "Hello Tenzor!",
      time: this.getCurrentTime(),
      mine: false
    }
  ];

  AUTHOR_NAME: string;

  private getCurrentTime(): string {
    let date = new Date();

    let minutes =
      date.getMinutes().toString().length === 1
        ? "0" + date.getMinutes().toString()
        : date.getMinutes();
    let hours =
      date.getHours().toString().length === 1
        ? "0" + date.getHours().toString()
        : date.getHours();

    return `${hours}:${minutes}`;
  }

  public _createMessage(text: string): void {
    const date = new Date();
    this.arrayOfMesages.push({
      author: this.AUTHOR_NAME,
      content: text,
      time: this.getCurrentTime(),
      mine: true
    });
  }

  setLoginName(name: string): void {
    this.AUTHOR_NAME = name;
  }
}
