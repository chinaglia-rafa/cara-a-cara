import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'm3-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input('appearance') appearance = 'text';
  @Input('color') color = 'primary';
  @Input('disabled') disabled = false;

  constructor() {}

  ngOnInit(): void {}
}
