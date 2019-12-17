export class GameService {
  arrayOfCells: { color: string; active: boolean }[] = [];

  ARRAY_OF_COLORS: string[] = [
    "midnightblue",
    "purple",
    "crimson",
    "mediumpurple",
    "orange",
    "blue"
  ];

  GAME_DIFFICULTY: 10 | 13 | 16 = 10;

  _colors = {
    10: 4,
    13: 5,
    16: 6
  };

  _createCell(): { color: string; active: boolean } {
    return {
      color: this.ARRAY_OF_COLORS[
        Math.floor(Math.random() * this._colors[this.GAME_DIFFICULTY])
      ],
      active: false
    };
  }

  _initArray(): void {
    this.arrayOfCells = [];
    for (let i = 0; i < this.GAME_DIFFICULTY * this.GAME_DIFFICULTY; i++) {
      this.arrayOfCells.push(this._createCell());
    }
    this.arrayOfCells[0].active = true;
    this._checkField();
  }

  changeColor(color: string): void {
    for (let cell of this.arrayOfCells) {
      if (cell.active) {
        cell.color = color;
      }
    }
    this._checkField();
  }

  _checkField(): void {
    for (let i = 0; i < this.GAME_DIFFICULTY * this.GAME_DIFFICULTY; i++) {
      if (this.arrayOfCells[i].active) {
        if (this.arrayOfCells[i + 1]) {
          if (
            this.arrayOfCells[i + 1].color === this.arrayOfCells[i].color &&
            Math.floor(i / this.GAME_DIFFICULTY) ===
              Math.floor((i + 1) / this.GAME_DIFFICULTY)
          ) {
            this.arrayOfCells[i + 1].active = true;
          }
        }

        if (this.arrayOfCells[i - 1]) {
          if (
            this.arrayOfCells[i - 1].color === this.arrayOfCells[i].color &&
            Math.floor(i / this.GAME_DIFFICULTY) ===
              Math.floor((i - 1) / this.GAME_DIFFICULTY)
          ) {
            this.arrayOfCells[i - 1].active = true;
          }
        }

        if (this.arrayOfCells[i].active) {
          if (this.arrayOfCells[i + this.GAME_DIFFICULTY]) {
            if (
              this.arrayOfCells[i + this.GAME_DIFFICULTY].color ===
              this.arrayOfCells[i].color
            ) {
              this.arrayOfCells[i + this.GAME_DIFFICULTY].active = true;
            }
          }
        }

        if (this.arrayOfCells[i - this.GAME_DIFFICULTY]) {
          if (
            this.arrayOfCells[i - this.GAME_DIFFICULTY].color ===
            this.arrayOfCells[i].color
          ) {
            this.arrayOfCells[i - this.GAME_DIFFICULTY].active = true;
          }
        }
      }
    }
  }
}
