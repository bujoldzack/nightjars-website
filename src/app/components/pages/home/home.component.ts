import { Component } from '@angular/core';
import { faSpotify, faSoundcloud, faInstagram, faApple } from '@fortawesome/free-brands-svg-icons';
import {RouterLink} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {OriginalsComponent} from './originals/originals.component';
import {RemixesComponent} from './remixes/remixes.component';
import {LiveSetsComponent} from './live-sets/live-sets.component';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    FontAwesomeModule,
    OriginalsComponent,
    RemixesComponent,
    LiveSetsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  socialLinks = [
    { icon: faSpotify, url: 'https://spotify.com' },
    { icon: faApple, url: 'https://applemusic.com' },
    { icon: faSoundcloud, url: 'https://soundcloud.com' },
    { icon: faInstagram, url: 'https://instagram.com' }
  ];
}
