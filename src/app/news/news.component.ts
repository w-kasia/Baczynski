import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlogDataService } from '../blog-data.service';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{

  menuIcon = 'menu';

  // blogPosts = [
  //   { date: '17 czerwca, 2022',
  //   title: 'Szklane ptaki. Opowieść o miłościach Krzysztofa Kamila Baczyńskiego',
  //   content: '"Szklane ptaki. Opowieść o miłościach Krzysztofa Kamila Baczyńskiego" Katarzyny Zyskowskiej to książka rzucająca nowe światło na życie jednego z najważniejszych poetów polskich XX wieku, który zginął w powstaniu warszawskim, pozostawiając po sobie twórczość porównywaną do dzieł Słowackiego.'
  //   },
  //    { date: '4 lipca, 2022',
  //   title: 'Damian Ukeje śpiewa Baczyńskiego. Oto pierwszy singiel z projektu "Poeci+" ',
  //   content: 'Pomysł na projekt zrodził się podczas gdy Damian przygotowywał materiał na specjalny koncert organizowany przez wytwórnię yMusic. Wtedy to sięgnął po twórczość K.K. Baczyńskiego i po przeczytani utworu "Bez imienia" uznał, że jest to tekst, do którego chce napisać muzykę.'
  //   },
  //   { date: '26 lutego, 2022',
  //   title: 'Spacer Literacki z Rozdroża za rogatki mokotowskie',
  //   content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo numquam laborum quos sapiente ipsa nostrum illum tempora quia, fugit repellat!'
  //   }
  // ];

  blogPosts: any[] = [];

  constructor(private blogDataService: BlogDataService, private router: Router) {}

  ngOnInit(): void {
    this.blogDataService.getData().subscribe(response => {
      this.blogPosts = response;
    })
  }



  navigateToArticle(post: any) {
    window.open(`/aktualnosci/${post.title}`)
  }



  openPost(title: string): void {
    const formattedTitle = title.toLowerCase()
    // .replace(/\s+/g,'-')  było to jedno
    .replace(/[.,;:*!?()}{[\]]/g, '')
    .replace(/ /g, '-')
    .replace(/[ł]/g, 'l')
    .replace(/[ą]/g, 'a')
    .replace(/[ę]/g, 'e')
    .replace(/[ó]/g, 'o')
    .replace(/[ś]/g, 's')
    .replace(/[ż]/g, 'z')
    .replace(/[ź]/g, 'z')
    .replace(/[ć]/g, 'c')
    .replace(/[ń]/g, 'n')
    .replace(/-{2,}/g, '-');
    this.router.navigate(['/aktualnosci', formattedTitle]);
  }


  }
