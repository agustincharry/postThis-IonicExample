import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-details',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss'],
})
export class DetailsPage implements OnInit {

  private post: any;
  private comments: Array<any>;

  constructor(private postsServce: PostsService, private commentsService: CommentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(paramsId => {
      const id = paramsId.id;
      this.getPost(id);
      this.getComments(id);
    });
  }

  getPost(postId: string) {
    this.postsServce.getPost(postId).subscribe(data => {
      this.post = data;
    });
  }

  getComments(postId: string) {
    this.commentsService.getComments(postId).subscribe(data => {
      this.comments = data;
    });
  }

}
