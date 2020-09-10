import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
@Injectable({
  providedIn: 'root'
})
export class MyAuthService {

  constructor(public data_service: CrudService) { }

  async login(email, password) {
    return new Promise(async (resolve, reject) => {
      await this.data_service.login("/users/authenticate", { "email": email, "password": password }).toPromise().then(result => {
        if (result['status'] != 200) {
          reject(result)
        } else {
          resolve(result['data']);
        }
      })
    })
  }
  
  async register(name,email, password) {
    return new Promise(async (resolve, reject) => {
      await this.data_service.login("/users/register", { "name":name,"email": email, "password": password }).toPromise().then(result => {
        if (result['status'] != 200) {
          reject(result)
        } else {
          resolve(result['data']);
        }
      })
    })
  }
}
