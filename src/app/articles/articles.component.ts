import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { ActivatedRoute, Router } from '@angular/router';

interface Article {
  title: string;
  date: string;
  content: string;
  text: string;
  image: string;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  menuIcon = 'menu';
  article!: Article;

  constructor(private newsService: NewsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');

    this.newsService.getData().subscribe((data) => {
      this.article = data.find((article: Article) => article.title.toLowerCase()
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
      .replace(/-{2,}/g, '-') === title)
    });
  }
  
  goToNews() {
    this.router.navigate(['/aktualnosci']);
  }
}