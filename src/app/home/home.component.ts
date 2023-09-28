import { Component } from '@angular/core';
import { pianoKeys } from '../constances/piano-keys.constance';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
 keys: { label: string, isBlack: boolean }[] = pianoKeys
}
