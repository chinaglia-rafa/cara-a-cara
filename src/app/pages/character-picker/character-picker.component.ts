import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  Character,
  CharactersService,
} from 'src/app/services/characters/characters.service';
import * as confetti from 'canvas-confetti';

@Component({
  selector: 'app-character-picker',
  templateUrl: './character-picker.component.html',
  styleUrls: ['./character-picker.component.scss'],
})
export class CharacterPickerComponent implements OnInit {
  front: Character;
  back: Character;
  chosen: Character;

  animation: Animation;

  @ViewChild('containerElement') container: ElementRef;
  @ViewChild('labelElement') label: ElementRef;
  @ViewChild('cardElement') card: ElementRef;
  @ViewChild('confetti') confetti: ElementRef;

  constructor(
    private characterService: CharactersService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.front = this.characterService.getRandomCharacter();
    this.back = this.characterService.getRandomCharacter();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.spin();
    }, 1000);
  }

  private spin(count: number = 0) {
    const rotate = [
      { transform: 'rotateY(0deg)' },
      { transform: 'rotateY(180deg)' },
    ];

    let duration = 0;
    if (count < 15) {
      duration = 900 - 60 * count;
    } else {
      duration = 180 + 60 * (count % 15);
    }

    this.animation = this.card.nativeElement.animate(rotate, {
      duration: duration < 180 ? 180 : duration,
      iterations: 1,
    });

    this.animation.onfinish = () => {
      this.ngZone.run(() => {
        if (count < 20) {
          this.front = this.back;
          this.back = this.characterService.getRandomCharacter();
          this.spin(++count);
        } else {
          this.front = this.back;
          this.finish();
        }
      });
    };
  }

  finish(): void {
    const confetti_effect = confetti.create(this.confetti.nativeElement);

    confetti_effect({
      shapes: ['square'],
      particleCount: 200,
      startVelocity: 30,
      spread: 120,
    })?.then(() => {
      this.chosen = this.front;
      this.characterService.setChosenCharacter(this.chosen);
      this.container.nativeElement.classList.add('go-up-animation');
      this.label.nativeElement.classList.remove('hidden');
    });
  }

  cancel(): void {
    if (this.animation.playState !== 'running') return;
    this.front = this.characterService.getRandomCharacter();
    this.animation.cancel();
    this.finish();
  }
}
