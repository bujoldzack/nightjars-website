import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {faApple, faInstagram, faSoundcloud, faSpotify} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink,
    FontAwesomeModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  socialLinks = [
    { icon: faSpotify, url: 'https://spotify.com' },
    { icon: faApple, url: 'https://applemusic.com' },
    { icon: faSoundcloud, url: 'https://soundcloud.com' },
    { icon: faInstagram, url: 'https://instagram.com' }
  ];
}
