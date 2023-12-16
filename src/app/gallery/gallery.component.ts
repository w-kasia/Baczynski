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
      alt: 'Krzysztof, rok 1921'
    },
    {
      filename: 'img-2.jpg',
      alt: 'Krzysztof, rok 1921'
    },
    {
      filename: 'img-7.jpg',
      alt: 'Krzysztof, rok 1921'
    },
    {
      filename: 'img-9.jpg',
      alt: 'Krzysztof, rok 1921'
    },
    {
      filename: 'img-8.jpg',
      alt: 'Krzysztof, rok 1921'
    },
    {
      filename: 'img-11.jpg',
      alt: 'Krzysztof, rok 1921'
    },
    {
      filename: 'img-22.jpg',
      alt: 'Krzysztof, rok 1921'
    },
    {
      filename: 'img-28.jpg',
      alt: 'Krzysztof, rok 1921'
    },
    {
      filename: 'img-10.jpg',
      alt: 'Krzysztof, rok 1921'
    },
    {
      filename: 'img-16.jpg',
      alt: 'Krzysztof, rok 1921'
    },
    {
      filename: 'img-15.jpg',
      alt: 'Krzysztof, rok 1921'
    },
    {
      filename: 'img-13.jpg',
      alt: 'Krzysztof, rok 1921'
    },
    {
      filename: 'img-18.jpg',
      alt: 'Krzysztof, rok 1921'
    },
    {
      filename: 'img-21.jpg',
      alt: 'Krzysztof, rok 1921'
    },
    {
      filename: 'img-17.jpg',
      alt: 'Krzysztof, rok 1921'
    },
    {
      filename: 'img-24.jpg',
      alt: 'Krzysztof, rok 1921'
    },
    {
      filename: 'img-19.jpg',
      alt: 'Krzysztof, rok 1921'
    },
    {
      filename: 'img-31.jpg',
      alt: 'Krzysztof, rok 1921'
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
