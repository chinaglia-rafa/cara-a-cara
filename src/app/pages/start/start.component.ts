import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters/characters.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  theme = true;

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {}
}
