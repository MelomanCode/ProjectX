import { Component, HostListener } from '@angular/core';
import { pianoKeys } from '../constances/piano-keys.constance';
import { PianoService } from '../services/piano.service';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css'],
})
export class PianoComponent {
  constructor(private pianoService: PianoService) {}

  private audio: HTMLAudioElement = new Audio();
  private volumeValue = 0.5;
  showKeys = true;
  keys: { label: string; isPressed: boolean }[] = pianoKeys;
  pianoKeyRule: 5 | 7 = 5;
  keyIndex = 5;

  @HostListener('document:keydown', ['$event']) onKeyDown(
    event: KeyboardEvent
  ): void {
    const label = this.pianoService.keyBoardBinding(event.key);
    if (label) {
      const foundKey = this.keys.find((value) => value.label === label);
      if (foundKey) {
        foundKey.isPressed = true;
      }
      this.playSound(label);
    }
  }

  @HostListener('document:keyup', ['$event']) onKeyUp(
    event: KeyboardEvent
  ): void {
    const label = this.pianoService.keyBoardBinding(event.key) || '';
    const foundKey = this.keys.find((value) => value.label === label);
    if (foundKey) {
      foundKey.isPressed = false;
    }
  }

  playSound(note: string) {
    const audio = new Audio(`./assets/samples/${note}.mp3`);
    audio.currentTime = 0.5;
    audio.volume = this.volumeValue;
    this.audio = audio;
    audio.play().catch((error) => {
      console.error('ERROR, DESTROY YOUR COMPUTER', error);
    });
  }

  volumeChange(event: any) {
    this.volumeValue = event.target.value;
    this.audio.volume = this.volumeValue;
  }

  toggleKeysVisibility() {
    this.showKeys = !this.showKeys;
  }

  checkKeyIndex(index: number, isPressed: boolean): string {
    if (index === 0) {
      this.pianoKeyRule = 5;
      this.keyIndex = 5;
    }

    if (index === this.keyIndex) {
      this.pianoKeyRule === 5
        ? (this.pianoKeyRule = 7)
        : (this.pianoKeyRule = 5);
      this.keyIndex = index + this.pianoKeyRule;
      return 'white' + (isPressed ? ' active-white' : '');
    }

    if (index % 2) {
      if (this.pianoKeyRule === 5) {
        return 'black' + (isPressed ? ' active-black' : '');
      }
      return 'white' + (isPressed ? ' active-white' : '');
    } else {
      if (this.pianoKeyRule === 7) {
        return 'black' + (isPressed ? ' active-black' : '');
      }
      return 'white' + (isPressed ? ' active-white' : '');
    }
  }
}
