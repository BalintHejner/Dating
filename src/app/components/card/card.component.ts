import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  images = [
    'https://suli.jedlik.eu/tablok/9498a/05.jpg',
    'https://avatars.githubusercontent.com/u/16857401?v=4',
    'https://cspk.hu/wp-content/uploads/2023/07/NL_300x300.jpg'
  ]

  index = 0;

  changeImage(direction: number) {
    this.index = (this.index + this.images.length + direction) % this.images.length;
  }
}
