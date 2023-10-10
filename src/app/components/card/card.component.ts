import { Component, Input } from '@angular/core';
import { PersonModel } from 'src/app/models/person.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() person: PersonModel | undefined;

  index = 0;

  changeImage(direction: number) {
    if (this.person)
    {
    this.index = (this.index + this.person.images.length + direction) % this.person.images.length;
    }
  }
}
