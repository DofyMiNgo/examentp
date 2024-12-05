import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent {
  colors: string[] = ['green', '#ff0000', 'blue', 'yellow'];
  selectedColor: string = this.colors[0];

  @Output() colorSelected = new EventEmitter<string>();

  selectColor(color: string) {
    this.selectedColor = color;
    this.colorSelected.emit(this.selectedColor);
  }

  updateCustomColor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.colors[this.colors.length - 1] = input.value;
    this.selectColor(input.value);
  }
}