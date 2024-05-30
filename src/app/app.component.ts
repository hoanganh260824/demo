import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { SlideComponent } from "./components/slide/slide.component";
import { CardComponent } from "./components/card/card.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HousingLocation } from './housinglocation';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavBarComponent, SlideComponent, CardComponent, PaginationComponent, FooterComponent, CommonModule],
    template:`
    <section class="results">
      <app-card
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation">
      </app-card>
    </section>
    `
})
export class AppComponent {
  title = 'demo';
  housingLocationList: HousingLocation[] = [
    {
      name: 'Maid wa Koisuru Hachiya-kun',
      photo: `https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/1781/cover/processed-a02cf6d213d581566861a559c072eb89.jpg`,
      id: 1,
    },
    {
      name: 'Monster #8',
      photo: `https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/1781/cover/processed-a02cf6d213d581566861a559c072eb89.jpg`,
      id: 2,
    },
    {
      name: 'Monster #8',
      photo: `https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/1781/cover/processed-a02cf6d213d581566861a559c072eb89.jpg`,
      id: 2,
    },
    {
      name: 'Monster #8',
      photo: `https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/1781/cover/processed-a02cf6d213d581566861a559c072eb89.jpg`,
      id: 2,
    },
    {
      name: 'Monster #8',
      photo: `https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/1781/cover/processed-a02cf6d213d581566861a559c072eb89.jpg`,
      id: 2,
    },
    {
      name: 'Monster #8',
      photo: `https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/1781/cover/processed-a02cf6d213d581566861a559c072eb89.jpg`,
      id: 2,
    },
    {
      name: 'Monster #8',
      photo: `https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/1781/cover/processed-a02cf6d213d581566861a559c072eb89.jpg`,
      id: 2,
    },
    {
      name: 'Monster #8',
      photo: `https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/1781/cover/processed-a02cf6d213d581566861a559c072eb89.jpg`,
      id: 2,
    },
    {
      name: 'Monster #8',
      photo: `https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/1781/cover/processed-a02cf6d213d581566861a559c072eb89.jpg`,
      id: 2,
    },
    {
      name: 'Monster #8',
      photo: `https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/1781/cover/processed-a02cf6d213d581566861a559c072eb89.jpg`,
      id: 2,
    },
    {
      name: 'Monster #8',
      photo: `https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/1781/cover/processed-a02cf6d213d581566861a559c072eb89.jpg`,
      id: 2,
    },
    {
      name: 'Monster #8',
      photo: `https://storage-ct.lrclib.net/file/cuutruyen/uploads/manga/1781/cover/processed-a02cf6d213d581566861a559c072eb89.jpg`,
      id: 2,
    },
    

    


  ]
}
