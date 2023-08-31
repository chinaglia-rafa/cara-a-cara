import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './pages/start/start.component';
import { CharacterPickerComponent } from './pages/character-picker/character-picker.component';
import { GameComponent } from './pages/game/game.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'start' },
  {
    path: 'start',
    component: StartComponent,
    data: { animation: 'start' },
  },
  {
    path: 'character-picker',
    component: CharacterPickerComponent,
    data: { animation: 'character-picker' },
  },
  { path: 'game', component: GameComponent, data: { animation: 'game' } },
  {
    path: 'character-details',
    component: CharacterDetailsComponent,
    data: { animation: 'character-details' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
