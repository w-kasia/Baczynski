import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent {

  menuIcon = 'menu';
  blogPosts: any[] = [];

  constructor(private blogDataService: BlogDataService) {}

  ngOnInit(): void {
    this.blogDataService.getData().subscribe(response => {
      this.blogPosts = response;
    })
  }

  }


