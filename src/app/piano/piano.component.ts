import { Component } from '@angular/core';
import { pianoKeys } from '../constances/piano-keys.constance';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css'],
})
export class PianoComponent {
  private audio: HTMLAudioElement = new Audio();
  private volumeValue = 0.5;
  showKeys = true;

  keys: { label: string; isBlack: boolean }[] = pianoKeys;

  playSound(note: string) {
    const audio = new Audio(`./assets/samples/${note}.mp3`);
    audio.currentTime = 0.5
    audio.volume = this.volumeValue;
    this.audio = audio
    audio.play().catch((error) => {
      console.error('ERROR, DESTROY YOUR COMPUTER', error);
    });
  }

  toggleKeysVisibility() {
    this.showKeys = !this.showKeys
  }


  volumeChange(event: any) {
    this.volumeValue = event.target.value
    this.audio.volume = this.volumeValue;
  }
}
