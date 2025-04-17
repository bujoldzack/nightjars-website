import { Component } from '@angular/core';

@Component({
  selector: 'app-live-sets',
  imports: [],
  templateUrl: './live-sets.component.html',
  styleUrl: './live-sets.component.scss'
})
export class LiveSetsComponent {
  liveSets = [
    { title: 'NIGHTJARS @ UDES', link: '/music/fantasy', releaseDate: '2024.07.26' },
    { title: 'Boozy Brunch Vol. 2', link: '/music/chase-me', releaseDate: '2024.04.28' },
    { title: 'Boozy Brunch Vol. 1', link: '/music/lost-on-you', releaseDate: '2024.03.17' },
  ];
}
