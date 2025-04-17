import { Component } from '@angular/core';

@Component({
  selector: 'app-remixes',
  imports: [],
  templateUrl: './remixes.component.html',
  styleUrl: './remixes.component.scss'
})
export class RemixesComponent {
  remixes = [
    { title: 'Étoiles Filantes', link: '/music/etoiles-filantes', releaseDate: '2025.03.28' },
    { title: 'Talking Body', link: '/music/talking-body', releaseDate: '2024.07.09' }
  ];
}
