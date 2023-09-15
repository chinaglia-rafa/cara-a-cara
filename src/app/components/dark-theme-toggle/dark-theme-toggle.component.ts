import { Component, Input, OnInit } from '@angular/core';
import { LightDarkThemeService } from 'src/app/services/light-dark-theme/light-dark-theme.service';

@Component({
  selector: 'app-dark-theme-toggle',
  templateUrl: './dark-theme-toggle.component.html',
  styleUrls: ['./dark-theme-toggle.component.scss'],
})
export class DarkThemeToggleComponent implements OnInit {
  @Input('checked') checked = false;

  constructor(private lightDarkTheme: LightDarkThemeService) {}

  ngOnInit(): void {
    this.checked = this.lightDarkTheme.getIsDark();

    document.documentElement.setAttribute(
      'data-theme',
      this.checked ? 'dark' : 'light'
    );
  }

  toggle(): void {
    this.checked = this.lightDarkTheme.toggle();
  }
}
