export class GameService {
  arrayOfCells: { color: string; active: boolean }[] = [];

  ARRAY_OF_COLORS: string[] = [
    "midnightblue",
    "purple",
    "crimson",
    "mediumpurple"
  ];

  GAME_DIFFICULTY: 6 | 8 | 10 = 10;

  _createCell(): { color: string; active: boolean } {
    return {
      color: this.ARRAY_OF_COLORS[Math.floor(Math.random() * 4)],
      active: false
    };
  }

  _initArray(num: number): void {
    this.arrayOfCells = [];
    for (let i = 0; i < num * num; i++) {
      this.arrayOfCells.push(this._createCell());
    }
    this.arrayOfCells[0].active = true;
    this._checkField(num);
  }

  changeColor(color: string): void {
    for (let cell of this.arrayOfCells) {
      if (cell.active) {
        cell.color = color;
      }
    }
    this._checkField(10);
  }

  _checkField(num: number): void {
    for (let i = 0; i < num * num; i++) {
      if (this.arrayOfCells[i].active) {
        if (this.arrayOfCells[i + 1]) {
          if (
            this.arrayOfCells[i + 1].color === this.arrayOfCells[i].color &&
            Math.floor(i / 10) === Math.floor((i + 1) / 10)
          ) {
            this.arrayOfCells[i + 1].active = true;
          }
        }

        if (this.arrayOfCells[i - 1]) {
          if (
            this.arrayOfCells[i - 1].color === this.arrayOfCells[i].color &&
            Math.floor(i / 10) === Math.floor((i - 1) / 10)
          ) {
            this.arrayOfCells[i - 1].active = true;
          }
        }

        if (this.arrayOfCells[i].active) {
          if (this.arrayOfCells[i + 10]) {
            if (
              this.arrayOfCells[i + 10].color === this.arrayOfCells[i].color
            ) {
              this.arrayOfCells[i + 10].active = true;
            }
          }
        }

        if (this.arrayOfCells[i - 10]) {
          if (this.arrayOfCells[i - 10].color === this.arrayOfCells[i].color) {
            this.arrayOfCells[i - 10].active = true;
          }
        }
      }
    }
  }
}
