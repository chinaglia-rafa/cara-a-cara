import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters/characters.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  constructor(public charactersService: CharactersService) {}

  ngOnInit(): void {}
}
