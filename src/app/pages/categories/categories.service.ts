import { Injectable } from '@angular/core';
import { CrudService } from '../../../services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(public crud_service: CrudService) {

  }

  async addNewCategory(data) {
    return new Promise(async (resolve, reject) => {
      this.crud_service.post_with_json('/category/addNewCategory',data).toPromise().then(result => {
        resolve(result)
      }).catch(err => {
        reject(err);
      })
    })

  }

  async updateCategory(data) {
    return new Promise(async (resolve, reject) => {
      this.crud_service.post_with_json('/category/updateCategory',data).toPromise().then(result => {
        resolve(result)
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