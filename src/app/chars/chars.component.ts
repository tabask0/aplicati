import { Component, OnInit } from '@angular/core';
import { Char } from '../char'
import { CHARS } from '../characters';

@Component({
  selector: 'app-chars',
  templateUrl: './chars.component.html',
  styleUrls: ['./chars.component.css']
})
export class CharsComponent implements OnInit {

  chars = CHARS;
  selectedChar: Char;

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(char: Char): void {
    this.selectedChar = char;
  }
}
