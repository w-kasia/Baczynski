import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  menuIcon = 'menu';

  images = [
    {
      filename: 'baczynski-dziecko.jpg',
      alt: 'Krzysztof, około 4 lata'
    },
    {
      filename: 'baczynski-z-matka.jpg',
      alt: 'Krzysztof z matką, gdy miał rok'
    },
    {
      filename: 'baczynski-portret.jpg',
      alt: 'Krzysztof, około 6 lat'
    },
    {
      filename: 'dziecinstwo-baczynski.jpg',
      alt: 'Krzysztof, około 7 lat'
    },
    {
      filename: 'dziecinstwo-baczynskiego.jpg',
      alt: 'Krzysztof, około 7 lat'
    },
    {
      filename: 'baczynski-wczesne-lata.jpg',
      alt: 'Krzysztof z ojcem, gdy miał około 7 lat'
    },
    {
      filename: 'matka-baczynski.jpg',
      alt: 'Krzysztof z matką, gdy miał około 10 lat'
    },
    {
      filename: 'stefania-baczynska.jpg',
      alt: 'Krzysztof z matką, gdy miał około 10 lat'
    },
    {
      filename: 'baczynski-z-ojcem.jpg',
      alt: 'Krzysztof, około 10 lat'
    },
    {
      filename: 'dzieci.jpg',
      alt: 'Krzysztof, rok 1921'
    },
    {
      filename: 'mlodosc-baczynski.jpg',
      alt: 'Krzysztof, około 10 lat'
    },
    {
      filename: 'baczynski-nastolatek.jpg',
      alt: 'Krzysztof, około 10 lat'
    },
    {
      filename: 'nastoletni-krzysztof.jpg',
      alt: 'Krzysztof, około 10 lat'
    },
    {
      filename: 'baczynski-rodzice.jpg',
      alt: 'Krzysztof, około 12 lat'
    },
    {
      filename: 'baczynski-w-mlodosci.jpg',
      alt: 'Krzysztof z rodzicami, około 12 lat'
    },
    {
      filename: 'baczynski-doroslosc.jpg',
      alt: 'Krzysztof, około 19 lat'
    },
    {
      filename: 'matka-syn.jpg',
      alt: 'Krzysztof z matką, około 16 lat'
    },
    {
      filename: 'baczynski-wojna.jpg',
      alt: 'Krzysztof, około 20 lat'
    }
  ];

  previewImage = false;
  showMask = false;
  currentLightboxImage = this.images[0];
  currentIndex = 0;
  controls = true;

  onPreviewImage(index: number) {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightboxImage = this.images[index];
  }

  goToPrev() {
    this.currentIndex = this.currentIndex -1;
    if(this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1;
    }
    this.currentLightboxImage = this.images[this.currentIndex];
  }

  goToNext() {
    this.currentIndex = this.currentIndex + 1;
    if(this.currentIndex > this.images.length - 1) {
      this.currentIndex = 0;
    }
    this.currentLightboxImage = this.images[this.currentIndex];
  }

  closePreview() {
    this.previewImage = false;
    this.showMask = false;
  }
}
