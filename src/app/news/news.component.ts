import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  blogPosts = [
    { title: 'Szklane ptaki. Opowieść o miłościach Krzysztofa Kamila Baczyńskiego',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo numquam laborum quos sapiente ipsa nostrum illum tempora quia, fugit repellat!'
    },
    { title: 'Szklane ptaki. Opowieść o miłościach Krzysztofa Kamila Baczyńskiego',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo numquam laborum quos sapiente ipsa nostrum illum tempora quia, fugit repellat!'
    },
     { title: 'Szklane ptaki. Opowieść o miłościach Krzysztofa Kamila Baczyńskiego',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo numquam laborum quos sapiente ipsa nostrum illum tempora quia, fugit repellat!'
    },
    { title: 'Szklane ptaki. Opowieść o miłościach Krzysztofa Kamila Baczyńskiego',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo numquam laborum quos sapiente ipsa nostrum illum tempora quia, fugit repellat!'
    }
  ];

  navigateToArticle(post: any) {
    window.open(`/aktualnosci/${post.title}`)
  }
}
