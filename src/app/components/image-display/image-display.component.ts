import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.scss'],
})
export class ImageDisplayComponent implements OnInit {
  @Input('src') src = '';
  @Input('width') width = 0;
  @Input('height') height = 0;
  @Input('label') label = '';

  constructor() {}

  ngOnInit(): void {}
}
