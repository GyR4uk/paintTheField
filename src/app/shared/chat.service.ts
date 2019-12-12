export class ChatService {
  arrayOfMesages: {
    author: string;
    content: string;
    time: string;
    mine: boolean;
  }[] = [
    {
      author: "Maximilian",
      content: "Hello world!",
      time: `1:34`,
      mine: false
    }
  ];

  AUTHOR_NAME = "Roma";

  _createMessage(text: string): void {
    const date = new Date();
    this.arrayOfMesages.push({
      author: this.AUTHOR_NAME,
      content: text,
      time: `${date.getHours()}:${date.getMinutes()}`,
      mine: true
    });
  }

  setLoginName(name: string): void {
    this.AUTHOR_NAME = name;
  }
}
