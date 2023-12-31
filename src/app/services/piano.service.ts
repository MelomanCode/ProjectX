import { Injectable } from '@angular/core';
import { pianoKeys } from '../constances/piano-keys.constance';


@Injectable({
  providedIn: 'root',
})
export class PianoService {

  keyBoardBinding(event: string) {
    switch (event) {
      case 'z': return pianoKeys.find(value => value.label === 'C1')?.label || ''
      case 's': return pianoKeys.find(value => value.label === 'C$1')?.label || ''
      case 'x': return pianoKeys.find(value => value.label === 'D1')?.label || ''
      case 'd': return pianoKeys.find(value => value.label === 'D$1')?.label || ''
      case 'c': return pianoKeys.find(value => value.label === 'E1')?.label || ''
      case 'v': return pianoKeys.find(value => value.label === 'F1')?.label || ''
      case 'g': return pianoKeys.find(value => value.label === 'F$1')?.label || ''
      case 'b': return pianoKeys.find(value => value.label === 'G1')?.label || ''
      case 'h': return pianoKeys.find(value => value.label === 'G$1')?.label || ''
      case 'n': return pianoKeys.find(value => value.label === 'A1')?.label || ''
      case 'j': return pianoKeys.find(value => value.label === 'A$1')?.label || ''
      case 'm': return pianoKeys.find(value => value.label === 'H1')?.label || ''
      case 'q': return pianoKeys.find(value => value.label === 'C2')?.label || ''
      case '2': return pianoKeys.find(value => value.label === 'C$2')?.label || ''
      case 'w': return pianoKeys.find(value => value.label === 'D2')?.label || ''
      case '3': return pianoKeys.find(value => value.label === 'D$2')?.label || ''
      case 'e': return pianoKeys.find(value => value.label === 'E2')?.label || ''
      default:  return ''
    }
  }
}
