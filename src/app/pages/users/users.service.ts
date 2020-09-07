import { Injectable } from '@angular/core';
import { CrudService } from '../../../services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public crud_service: CrudService) {

  }

  async addNewUser(data) {
    return new Promise(async (resolve, reject) => {
      this.crud_service.post_with_json('/profile/addNewUser',data).toPromise().then(result => {
        resolve(result)
      }).catch(err => {
        reject(err);
      })
    })

  }

  async userList() {
    return new Promise(async (resolve, reject) => {
      this.crud_service.get('/profile/userList').toPromise().then(result => {
        if(result['status']==200){
          resolve(result['data'])
        }else{
          resolve([])
        }
      }).catch(err => {
        reject(err);
      })
    })

  }
}