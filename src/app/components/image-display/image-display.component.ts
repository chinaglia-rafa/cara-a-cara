import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

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
  millisecondToActivate = 1000;
  timer: any;
  isFlipped = false;
  touchStartPosition: [number, number] = [0, 0];

  constructor() {}

  ngOnInit(): void {}

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
