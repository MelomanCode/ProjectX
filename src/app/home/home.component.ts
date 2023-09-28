import { Component } from '@angular/core';
import { pianoKeys } from '../constances/piano-keys.constance';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  keys: { label: string; isBlack: boolean }[] = pianoKeys;

  playSound(note: string) {
    const audio = new Audio(`./assets/samples/${note}.mp3`);
    audio.play().then(() => {
      //
      })
      .catch(error => {
        console.error('Произошла ошибка при воспроизведении аудио:', error);
      });
  }
}
