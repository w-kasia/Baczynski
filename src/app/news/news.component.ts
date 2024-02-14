import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{

  @Input() showInHome: boolean = false;

  menuIcon = 'menu';
  articles: any[] = [];
  errorMessage: string = '';

  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit(): void {
    this.newsService.getData().subscribe(response => {
      this.articles = response;
    }, error => {
      console.log('Error fetchnig json data in News Component');
      this.errorMessage = 'Przepraszamy. Wystąpił błąd, nie możemy załadować danych. Prosimy spróbować później.'
    }
    );

      const newsHeadings = document.querySelectorAll('.heading');

       const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }

       const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fadeInTop');
            observer.unobserve(entry.target);
          }
        });
      }, options);

      newsHeadings.forEach(newsHeading => {
        observer.observe(newsHeading);
      });
  }

  navigateToArticle(article: any) {
    window.open(`/aktualnosci/${article.title}`)
  }

  openArticle(title: string): void {
    const formattedTitle = title
    .toLowerCase()
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
