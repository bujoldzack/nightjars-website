import { Component } from '@angular/core';

@Component({
  selector: 'app-remixes',
  imports: [],
  templateUrl: './remixes.component.html',
  styleUrl: './remixes.component.scss'
})
export class RemixesComponent {
  remixes = [
    { title: 'Étoiles Filantes', link: 'https://soundcloud.com/nightjars-71760892/etoile-filante-draft', releaseDate: '2025.03.28' },
    { title: 'Talking Body', link: 'https://soundcloud.com/nightjars-71760892/talking-body-afro-house-remix-10-mins', releaseDate: '2024.07.09' }
  ];
}
