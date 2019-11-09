import { Component } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  response$;

  constructor(private _postsService: PostsService) {}

  ngOnInit() {
    this.response$ = this._postsService.putData();
  }
}
