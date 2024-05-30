import {
  Component,
  Input
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  HousingLocation
} from '../../housinglocation';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  // templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  template: `
 <section class="listing">
      
      <a href="">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.id}}, {{housingLocation.id }}</p>
      </a>
      
    </section>

  `

})
export class CardComponent {
  @Input() housingLocation!: HousingLocation;
}
