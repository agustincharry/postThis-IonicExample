import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PostsPage } from './list/posts.page';
import { DetailsPage } from './details/details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PostsPage
      },
      {
        path: ':id',
        component: DetailsPage
      }
    ])
  ],
  declarations: [PostsPage, DetailsPage]
})
export class PostsPageModule {}
