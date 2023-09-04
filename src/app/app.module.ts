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
import { ImageDisplayComponent } from './components/image-display/image-display.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    ImageDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
