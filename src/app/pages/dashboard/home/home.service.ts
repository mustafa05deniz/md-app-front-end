import { Injectable } from '@angular/core';
import { CrudService } from '../../../../services/crud.service';


@Injectable({
    providedIn: 'root'
})
export class HomeService {


    constructor(public crud_service:CrudService) {
        
    }

    async check(){
        return new Promise(async (resolve,reject)=>{
            this.crud_service.get('/').toPromise().then(result=>{
                resolve(result)
            }).catch(err=>{
                reject(err);
            })
        })
        
    }

    


}