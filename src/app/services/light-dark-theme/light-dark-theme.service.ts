import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LightDarkThemeService {
  /** Indica se o tema é escuro ou claro */
  isDark = false;
  /** Emite valores de isDark para uso em componentes com custom colors */
  toggle$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.loadTheme();
  }

  getIsDark(): boolean {
    return this.isDark;
  }

  getIsLight(): boolean {
    return !this.isDark;
  }

  toggle(): boolean {
    this.isDark = !this.isDark;
    document.documentElement.setAttribute(
      'data-theme',
      this.isDark ? 'dark' : 'light'
    );
    this.saveTheme(this.isDark);

    this.toggle$.next(this.isDark);

    return this.isDark;
  }

  loadTheme(): void {
    this.isDark = localStorage.getItem('theme') === 'true';

    this.toggle$.next(this.isDark);
  }

  saveTheme(state: boolean): void {
    localStorage.setItem('theme', state ? 'true' : 'false');
  }
}
