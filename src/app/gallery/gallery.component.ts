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
      filename: 'img-3.jpg',
      alt: 'Krzysztof, około 4 lata'
    },
    {
      filename: 'img-2.jpg',
      alt: 'Krzysztof z matką, gdy miał rok'
    },
    {
      filename: 'img-7.jpg',
      alt: 'Krzysztof, około 6 lat'
    },
    {
      filename: 'img-9.jpg',
      alt: 'Krzysztof, około 7 lat'
    },
    {
      filename: 'img-8.jpg',
      alt: 'Krzysztof, około 7 lat'
    },
    {
      filename: 'img-11.jpg',
      alt: 'Krzysztof z ojcem, gdy miał około 7 lat'
    },
    {
      filename: 'img-22.jpg',
      alt: 'Krzysztof z matką, gdy miał około 10 lat'
    },
    {
      filename: 'img-28.jpg',
      alt: 'Krzysztof z matką, gdy miał około 10 lat'
    },
    {
      filename: 'img-10.jpg',
      alt: 'Krzysztof, około 10 lat'
    },
    {
      filename: 'img-16.jpg',
      alt: 'Krzysztof, rok 1921'
    },
    {
      filename: 'img-15.jpg',
      alt: 'Krzysztof, około 10 lat'
    },
    {
      filename: 'img-13.jpg',
      alt: 'Krzysztof, około 10 lat'
    },
    {
      filename: 'img-18.jpg',
      alt: 'Krzysztof, około 10 lat'
    },
    {
      filename: 'img-21.jpg',
      alt: 'Krzysztof, około 12 lat'
    },
    {
      filename: 'img-17.jpg',
      alt: 'Krzysztof z rodzicami, około 12 lat'
    },
    {
      filename: 'img-24.jpg',
      alt: 'Krzysztof, około 19 lat'
    },
    {
      filename: 'img-19.jpg',
      alt: 'Krzysztof z matką, około 16 lat'
    },
    {
      filename: 'img-31.jpg',
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
