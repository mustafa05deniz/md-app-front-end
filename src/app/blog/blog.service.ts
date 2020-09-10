import { Injectable } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Posts } from './posts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(public crud_service: CrudService) {

  }

  async addNewPost(data) {
    return new Promise(async (resolve, reject) => {
      this.crud_service.post_with_json('/posts/addNewPost', data).toPromise().then(result => {
        resolve(result)
      }).catch(err => {
        reject(err);
      })
    })

  }
  SinglePost(data): Observable<Posts[]> {
    return this.crud_service.post_with_json('/posts/single',data).pipe(map(response => {
      return response['data']
    }))
  }

  postList(): Observable<Posts[]> {
    return this.crud_service.get('/posts/postList').pipe(map(response => {
      return response['data']
    }))
  }
  categoryList(): Observable<Category[]> {
    return this.crud_service.get('/category/categoryList').pipe(map(response => {
      return response['data']
    }))
  }

}