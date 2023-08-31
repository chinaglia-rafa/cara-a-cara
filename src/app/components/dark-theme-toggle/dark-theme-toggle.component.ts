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
    this.loadTheme();

    document.documentElement.setAttribute(
      'data-theme',
      this.checked ? 'dark' : 'light'
    );
  }

  toggle(): void {
    this.checked = !this.checked;
    document.documentElement.setAttribute(
      'data-theme',
      this.checked ? 'dark' : 'light'
    );
    this.saveTheme(this.checked);
  }

  loadTheme(): void {
    this.checked = localStorage.getItem('theme') === 'true';
    console.log(this.checked);
  }

  saveTheme(state: boolean): void {
    localStorage.setItem('theme', state ? 'true' : 'false');
  }
}
