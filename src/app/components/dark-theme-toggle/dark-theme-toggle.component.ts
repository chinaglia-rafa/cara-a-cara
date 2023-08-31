import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-theme-toggle',
  templateUrl: './dark-theme-toggle.component.html',
  styleUrls: ['./dark-theme-toggle.component.scss'],
})
export class DarkThemeToggleComponent implements OnInit {
  @Input('checked') checked = false;

  constructor() {}

  ngOnInit(): void {
    if (this.checked) this.toggle();
  }

  toggle(): void {
    this.checked = !this.checked;
    document.documentElement.setAttribute(
      'data-theme',
      this.checked ? 'dark' : 'light'
    );
  }
}
