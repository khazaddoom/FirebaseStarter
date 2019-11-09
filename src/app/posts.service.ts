import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  createData() {
    this.http.put('https://messaging-app-fd056.firebaseio.com/posts.json', {
      name: 'Hello World'
    }).subscribe(response => {
      console.log(response)
    })
  }

  putData() {
    return this.http.put('https://messaging-app-fd056.firebaseio.com/posts.json', {
      title: 'CSS Secrets',
      author: 'Lea Verou',
      price: 1500,
      currency: 'INR'
    }).pipe(
      map((data:any) => {
        return `Author: ${data.author}`
      })
    );
  }

}
