import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pixel-grid',
  templateUrl: './pixel-grid.component.html',
  styleUrls: ['./pixel-grid.component.scss']
})
export class PixelGridComponent {
  @Input() selectedColor: string = '#000000';
  rows: number = 20;
  columns: number = 20;
  grid: string[][] = [];
  isPainting: boolean = false;

  constructor() {
    this.createGrid();
  }

  createGrid() {
    const newGrid = Array.from({ length: this.columns }, () => Array(this.rows).fill('#ffffff'));

    for (let row = 0; row < this.columns; row++) {
      for (let col = 0; col < this.rows; col++) {
        if (this.grid[row] && this.grid[row][col]) {
          newGrid[row][col] = this.grid[row][col];
        }
      }
    }

    this.grid = newGrid;
  }
  startPainting() {
    this.isPainting = true;
  }

  stopPainting() {
    this.isPainting = false;
  }

  paintCell(rowIndex: number, colIndex: number, event: MouseEvent) {
    if (this.isPainting) {
      this.grid[rowIndex][colIndex] = this.selectedColor;
    }
    event.preventDefault();
  }
  exportGrid() {
    const canvas = document.createElement('canvas');
    const cellSize = 20;
    canvas.width = this.rows * cellSize;
    canvas.height = this.columns * cellSize;
    const context = canvas.getContext('2d');

    if (context) {
      for (let row = 0; row < this.rows; row++) {
        for (let col = 0; col < this.columns; col++) {
          context.fillStyle = this.grid[row][col];
          context.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
        }
      }

      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'pixel-art.png';
      link.click();
    }
  }
}
