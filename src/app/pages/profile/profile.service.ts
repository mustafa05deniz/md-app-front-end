import { Injectable } from '@angular/core';
import { CrudService } from '../../../services/crud.service';


@Injectable({
    providedIn: 'root'
})
export class ProfileService {


    constructor(public crud_service:CrudService) {
        
    }

    async user_information(){
        return new Promise(async (resolve,reject)=>{
            this.crud_service.get('/profile/user_info').toPromise().then(result=>{
                resolve(result['data'])
            }).catch(err=>{
                reject(err);
            })
        })
        
    }


}