import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: 'posts.page.html',
  styleUrls: ['posts.page.scss'],
})
export class PostsPage implements OnInit{

  private posts:Array<any>;

  constructor(private postsServce:PostsService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.postsServce.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

}
