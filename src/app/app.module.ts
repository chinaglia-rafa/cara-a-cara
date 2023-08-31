import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './pages/start/start.component';
import { CharacterPickerComponent } from './pages/character-picker/character-picker.component';
import { GameComponent } from './pages/game/game.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { DarkThemeToggleComponent } from './components/dark-theme-toggle/dark-theme-toggle.component';
import { ButtonComponent } from './components/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackButtonDirective } from './directives/back-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    CharacterPickerComponent,
    GameComponent,
    CharacterDetailsComponent,
    DarkThemeToggleComponent,
    ButtonComponent,
    BackButtonDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
