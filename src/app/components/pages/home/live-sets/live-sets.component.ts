import { Component } from '@angular/core';

@Component({
  selector: 'app-live-sets',
  imports: [],
  templateUrl: './live-sets.component.html',
  styleUrl: './live-sets.component.scss'
})
export class LiveSetsComponent {
  liveSets = [
    { title: 'NIGHTJARS @ UDES', link: 'https://soundcloud.com/nightjars-71760892/nightjars-leucan-full-set-1', releaseDate: '2024.07.26' },
    { title: 'Boozy Brunch Vol. 2', link: 'https://soundcloud.com/nightjars-71760892/nightjars-pura-vida-boozy-brunch-2nd-edition', releaseDate: '2024.04.28' },
    { title: 'Boozy Brunch Vol. 1', link: 'https://soundcloud.com/nightjars-71760892/01-boozy-brunch-v1', releaseDate: '2024.03.17' },
  ];
}
