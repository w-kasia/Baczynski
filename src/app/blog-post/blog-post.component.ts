import { Component } from '@angular/core';
import { BlogDataService } from '../blog-data.service';
import { ActivatedRoute } from '@angular/router';

interface Post {
  title: string;
  date: string;
  content: string;
  text: string;
  image: string;
}
@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent {

  menuIcon = 'menu';
  post: Post | undefined;

  constructor(private blogDataService: BlogDataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');

    this.blogDataService.getData().subscribe((data) => {
      this.post = data.find((post: Post) => post.title.toLowerCase()
      // .replace(/\s+/g,'-') === title)
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
}
