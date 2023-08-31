import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './pages/start/start.component';
import { CharacterPickerComponent } from './pages/character-picker/character-picker.component';
import { GameComponent } from './pages/game/game.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { DarkThemeToggleComponent } from './components/dark-theme-toggle/dark-theme-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    CharacterPickerComponent,
    GameComponent,
    CharacterDetailsComponent,
    DarkThemeToggleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
