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
