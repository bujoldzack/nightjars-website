import {Component} from '@angular/core';
import {faSpotify, faSoundcloud, faInstagram, faApple, faTiktok} from '@fortawesome/free-brands-svg-icons';
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
    {icon: faSpotify, url: 'https://open.spotify.com/intl-fr/artist/4nGnMJiON9x7fYHg5KT2m0?si=F4p875X2StWuWMchPvZifQ'},
    {icon: faApple, url: 'https://music.apple.com/us/artist/nightjars/1742718996'},
    {icon: faSoundcloud, url: 'https://soundcloud.com/nightjars-71760892'},
    {icon: faInstagram, url: 'https://instagram.com/officialnightjars'},
    {icon: faTiktok, url: 'https://www.tiktok.com/@officialnightjars'}
  ];
}
