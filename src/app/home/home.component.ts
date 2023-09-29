import { Component } from '@angular/core';
import { pianoKeys } from '../constances/piano-keys.constance';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  private audio: HTMLAudioElement;
  private volumeValue = 0.5;

  constructor() {
    this.audio = new Audio();
    this.audio.volume = this.volumeValue;
  }

  keys: { label: string; isBlack: boolean }[] = pianoKeys;

  playSound(note: string) {
    const audio = new Audio(`./assets/samples/${note}.mp3`);
    audio.volume = this.volumeValue;
    audio.play().catch((error) => {
      console.error('ERROR, DESTROY YOUR COMPUTER', error);
    });
  }

  volumeChange(event: any) {
    this.volumeValue = event.target.value
      this.audio.volume = this.volumeValue;
    }
}
