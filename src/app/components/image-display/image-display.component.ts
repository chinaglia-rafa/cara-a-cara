import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CustomColors, Theme } from 'src/app/models/colors.model';
import 'material-dynamic-colors';
import { LightDarkThemeService } from 'src/app/services/light-dark-theme/light-dark-theme.service';
import { of, switchMap } from 'rxjs';

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

  @ViewChild('card') card: ElementRef;
  /** Milisegundos que o usuário precisará manter o componente pressionado para ativá-lo */
  millisecondToActivate = 600;
  timer: any;
  isFlipped = false;
  touchStartPosition: [number, number] = [0, 0];
  customColors: CustomColors;

  constructor(
    private lightDarkTheme: LightDarkThemeService,
    private hostElement: ElementRef
  ) {}

  ngOnInit(): void {
    this.lightDarkTheme.toggle$.subscribe((isDark: boolean) => {
      this.getCustomColors(isDark).then((theme: Theme) => {
        console.log(theme);
        this.setCssVariables(theme);
      });
    });
  }

  async getCustomColors(isDark: boolean): Promise<Theme> {
    if (this.customColors !== undefined)
      return isDark ? this.customColors.dark : this.customColors.light;

    this.customColors = await (window as any).materialDynamicColors(this.src);

    return isDark ? this.customColors.dark : this.customColors.light;
  }

  private setCssVariables(theme: Theme): void {
    const tokens = [
      'primary',
      'onPrimary',
      'primaryContainer',
      'onPrimaryContainer',
      'secondary',
      'onSecondary',
      'secondaryContainer',
      'onSecondaryContainer',
      'tertiary',
      'onTertiary',
      'tertiaryContainer',
      'onTertiaryContainer',
      'error',
      'onError',
      'errorContainer',
      'onErrorContainer',
      'background',
      'onBackground',
      'surface',
      'onSurface',
      'surfaceVariant',
      'onSurfaceVariant',
      'outline',
      'outlineVariant',
      'shadow',
      'scrim',
      'inverseSurface',
      'inverseOnSurface',
      'inversePrimary',
    ];
    for (let token of tokens) {
      this.hostElement.nativeElement.style.setProperty(
        '--custom-color-' + token,
        theme[token as keyof typeof theme] // ÉOQ? AHUAHUHUAHUA
      );
    }
  }

  mousedown(event: TouchEvent | null): void {
    // console.log('trying to activate');
    if (event)
      this.touchStartPosition = [
        event.touches[0].screenX,
        event.touches[0].screenY,
      ];
    this.timer = setTimeout(() => {
      this.activate();
    }, this.millisecondToActivate);
  }

  mouseup(event: TouchEvent | null): void {
    if (!this.timer) return;
    if (event) {
      if (
        Math.abs(
          this.touchStartPosition[0] - event.changedTouches[0].screenX
        ) <= 20 &&
        Math.abs(
          this.touchStartPosition[1] - event.changedTouches[0].screenY
        ) <= 20
      ) {
        return;
      }
    }
    // console.log('canceled');
    clearTimeout(this.timer);
  }

  dblclick(): void {
    this.activate();
  }

  activate(): void {
    if (this.timer) clearTimeout(this.timer);
    this.timer = null;
    const normal = [
      { transform: 'rotateY(0deg)' },
      { transform: 'rotateY(180deg)' },
    ];
    const reverse = [
      { transform: 'rotateY(180deg)' },
      { transform: 'rotateY(0deg)' },
    ];
    this.card.nativeElement.animate(this.isFlipped ? reverse : normal, {
      easing: 'cubic-bezier(0.2, 0.0, 0, 1.0)',
      duration: 400,
      interations: 1,
      fill: 'forwards',
    });
    this.isFlipped = !this.isFlipped;
  }

  keyup(event: KeyboardEvent): void {
    if (['Space', 'Enter'].includes(event.code)) this.activate();
  }
}
