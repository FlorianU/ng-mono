import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private readonly http: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.baseurlApi}/wp/v2/posts`);
  }
}
