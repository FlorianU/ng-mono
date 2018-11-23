import { Component, OnInit } from '@angular/core';
import { Post } from '@rappenstein-mobile/interfaces';
import { PostsService } from '@rappenstein-mobile/services';


@Component({
  selector: 'personal-mono-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public posts: Post[];
  public isSpinning: boolean;

  constructor(
    private readonly postsService: PostsService,
  ) { }

  ngOnInit() {
    console.warn('wat');
    this.isSpinning = true;
    this.postsService.getPosts().subscribe(
      response => {
        this.posts = response;
        this.isSpinning = false;
      },
      error => {
        this.isSpinning = false;
      });
  }
}
