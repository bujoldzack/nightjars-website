import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {faApple, faInstagram, faSoundcloud, faSpotify, faTiktok} from '@fortawesome/free-brands-svg-icons';
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
    {icon: faSpotify, url: 'https://open.spotify.com/intl-fr/artist/4nGnMJiON9x7fYHg5KT2m0?si=F4p875X2StWuWMchPvZifQ'},
    {icon: faApple, url: 'https://music.apple.com/us/artist/nightjars/1742718996'},
    {icon: faSoundcloud, url: 'https://soundcloud.com/nightjars-71760892'},
    {icon: faInstagram, url: 'https://instagram.com/officialnightjars'},
    {icon: faTiktok, url: 'https://www.tiktok.com/@officialnightjars'}
  ];
}
