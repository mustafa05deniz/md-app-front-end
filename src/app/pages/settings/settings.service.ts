import { Injectable } from '@angular/core';
import { CrudService } from '../../../services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(public crud_service: CrudService) {

  }



}