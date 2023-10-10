import { Component } from '@angular/core';
import { PersonModel } from 'src/app/models/person.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  people: PersonModel[] = [
    {
      name: 'Nits László',
      age: 55,
      sex: 'férfi',
      weight: 84,
      height: 1.80,
      interest: ['nő'],
      introdction: "55 éves szenvedélyes programozó tanítana pythont magányos fiatal hölgyeknek. Jelentkezni priviben ;)",
      oneNightOnly: true,
      county: "Győr-Moson-Sopron",
      images: [
      'https://suli.jedlik.eu/tablok/9498a/05.jpg',
      'https://avatars.githubusercontent.com/u/16857401?v=4',
      'https://suli.jedlik.eu/tablok/0206a/images/33.jpg'
      ]
    },
    {
      name: 'Csonka Brünhilda',
      age: 54,
      sex: 'nő',
      weight: 65,
      height: 1.55,
      interest: ['férfi'],
      introdction: "54 éves elvált hölgy keresi a szabadulást négy gyermeke rabságából",
      oneNightOnly: true,
      county: "Győr-Moson-Sopron",
      images: [
        'https://www.ohchr.org/sites/default/files/styles/hero_5_image_desktop/public/2022-11/women-rights-main-image.jpg?itok=RRGl2PFb'
      ]
    }
  ];
}
