import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss'],
})
export class DetailsPage implements OnInit {

  private post: any;

  constructor(private postsServce: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(paramsId => {
      const id = paramsId.id;
      this.getPost(id);
    });
  }

  getPost(id: string) {
    this.postsServce.getPost(id).subscribe(data => {
      this.post = data;
    });
  }

}
