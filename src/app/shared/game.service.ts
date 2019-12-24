import { HttpClient, HttpHeaders } from "@angular/common/http";

export class GameService {
  constructor(private http: HttpClient) {}
  public arrayOfCells: { color: string; active: boolean }[] = [];

  private ARRAY_OF_COLORS: string[] = [
    "midnightblue",
    "purple",
    "crimson",
    "mediumpurple",
    "orange",
    "blue"
  ];

  _colors = {
    10: 4,
    13: 5,
    16: 6
  };

  private currentActive: number = 0;

  public isEnd: boolean = false;
  public scoreFactor: number;

  public scores: number = 0;

  private id;
  public ACTIVE_ARRAY_OF_COLORS: string[] = [];

  public GAME_DIFFICULTY: 10 | 13 | 16;

  public startTheGame(number: 10 | 13 | 16): void {
    this.scoreFactor = 3;
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    this.http
      .post(
        "http://localhost:8080/api/records",
        JSON.stringify({ game: "paintTheField" }),
        { headers }
      )
      .subscribe(response => {
        this.id = response;
      });
    this.GAME_DIFFICULTY = number;
    this._editActiveColorsArray();
    this._initArray();
  }

  public restartTheGame(): void {
    this.GAME_DIFFICULTY = undefined;
    this.isEnd = false;
    this.ACTIVE_ARRAY_OF_COLORS = [];
    this.currentActive = 0;
    this.scores = 0;
  }

  private _checkForTheEnd(): void {
    for (let i = 0; i < this.GAME_DIFFICULTY * this.GAME_DIFFICULTY; i++) {
      if (this.arrayOfCells[i].active === false) {
        this.isEnd = false;
        return;
      }
    }
    if (this.scoreFactor < 1) {
      this.scoreFactor = 1;
    }
    this.scores = Math.ceil(this.scores * this.scoreFactor);
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    this.http
      .patch(
        `http://localhost:8080/api/records?id=${this.id}`,
        JSON.stringify({
          id: this.id,
          score: this.scores
        }),
        { headers }
      )
      .subscribe(response => {
          this.isEnd = true;
          this.scoreFactor = 3;
          for (let cell of this.arrayOfCells) {
            cell.color = "gray";
          }
        },
        request =>{
          alert("УПС! Сервер не хочет принять ваш результат.")
          this.isEnd = true;
          this.scoreFactor = 3;
          for (let cell of this.arrayOfCells) {
            cell.color = "gray";
          }
        }
      );

    return;
  }

  private _editActiveColorsArray(): void {
    if (this.ACTIVE_ARRAY_OF_COLORS.length !== 0) {
      this.ACTIVE_ARRAY_OF_COLORS = [];
    }
    for (let i = 0; i < this._colors[this.GAME_DIFFICULTY]; i++) {
      this.ACTIVE_ARRAY_OF_COLORS.push(this.ARRAY_OF_COLORS[i]);
    }
  }

  private _createCell(): { color: string; active: boolean } {
    return {
      color: this.ARRAY_OF_COLORS[
        Math.floor(Math.random() * this._colors[this.GAME_DIFFICULTY])
      ],
      active: false
    };
  }

  private _initArray(): void {
    this.arrayOfCells = [];
    for (let i = 0; i < this.GAME_DIFFICULTY * this.GAME_DIFFICULTY; i++) {
      this.arrayOfCells.push(this._createCell());
    }
    this.arrayOfCells[0].active = true;
    this.arrayOfCells[0].color = undefined;
    this._checkField();
    this._checkForTheEnd();
  }

  public changeColor(color: string): void {
    let chek;
    for (let cell of this.arrayOfCells) {
      if (cell.active) {
        cell.color = color;
      }
    }
    do {
      chek = this._checkField();
    } while (chek === 0);
    this._checkForTheEnd();
  }

  private _addScores(num: number): void {
    let addNum = 100;
    for (let i = 0; i < num; i++) {
      this.scores += addNum;
      addNum += 100;
    }
  }

  private _checkHowManyActive(): void {
    let count = 0;
    for (let cell of this.arrayOfCells) {
      if (cell.active) {
        count++;
      }
    }
    this._addScores(count - this.currentActive);
    this.currentActive = count;
  }

  private _checkField(): any {
    let count = 0;
    for (let i = 0; i < this.GAME_DIFFICULTY * this.GAME_DIFFICULTY; i++) {
      if (this.arrayOfCells[i].active) {
        if (this.arrayOfCells[i + 1]) {
          if (
            this.arrayOfCells[i + 1].color === this.arrayOfCells[i].color &&
            Math.floor(i / this.GAME_DIFFICULTY) ===
              Math.floor((i + 1) / this.GAME_DIFFICULTY)
          ) {
            this.arrayOfCells[i + 1].active = true;
            count++;
          }
        }

        if (this.arrayOfCells[i - 1]) {
          if (
            this.arrayOfCells[i - 1].color === this.arrayOfCells[i].color &&
            Math.floor(i / this.GAME_DIFFICULTY) ===
              Math.floor((i - 1) / this.GAME_DIFFICULTY)
          ) {
            this.arrayOfCells[i - 1].active = true;
            count++;
          }
        }

        if (this.arrayOfCells[i].active) {
          if (this.arrayOfCells[i + this.GAME_DIFFICULTY]) {
            if (
              this.arrayOfCells[i + this.GAME_DIFFICULTY].color ===
              this.arrayOfCells[i].color
            ) {
              this.arrayOfCells[i + this.GAME_DIFFICULTY].active = true;
              count++;
            }
          }
        }

        if (this.arrayOfCells[i - this.GAME_DIFFICULTY]) {
          if (
            this.arrayOfCells[i - this.GAME_DIFFICULTY].color ===
            this.arrayOfCells[i].color
          ) {
            this.arrayOfCells[i - this.GAME_DIFFICULTY].active = true;
            count++;
          }
        }
      }
    }
    this._checkHowManyActive();
    return count;
  }
}
