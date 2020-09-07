import { Injectable } from '@angular/core';
import { CrudService } from '../../../services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public crud_service: CrudService) {

  }

  async addNewPost(data) {
    return new Promise(async (resolve, reject) => {
      this.crud_service.post_with_json('/posts/addNewPost',data).toPromise().then(result => {
        resolve(result)
      }).catch(err => {
        reject(err);
      })
    })

  }

  async postList() {
    return new Promise(async (resolve, reject) => {
      this.crud_service.get('/posts/postList').toPromise().then(result => {
        if(result['status']==200){
            resolve(result['data'].reverse());
          }else{
            resolve([])
          }
      }).catch(err => {
        reject(err);
      })
    })

  }


  async categoryList() {
    return new Promise(async (resolve, reject) => {
      this.crud_service.get('/category/categoryList').toPromise().then(result => {
        if(result['status']==200){
            resolve(result['data'].reverse());
          }else{
            resolve([])
          }
      }).catch(err => {
        reject(err);
      })
    })

  }

}