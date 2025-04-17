import { Component } from '@angular/core';

@Component({
  selector: 'app-originals',
  imports: [],
  templateUrl: './originals.component.html',
  styleUrl: './originals.component.scss'
})
export class OriginalsComponent {
  tracks = [
    { title: 'Try', link: '/music/try', releaseDate: '2025.??.??' },
    { title: 'Fantasy', link: '/music/fantasy', releaseDate: '2025.04.18' },
    { title: 'Chase Me', link: '/music/chase-me', releaseDate: '2024.12.06' },
    { title: 'Lost On You', link: '/music/lost-on-you', releaseDate: '2024.04.12' },
  ];
}
