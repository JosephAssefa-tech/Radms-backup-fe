import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KebeleMaster } from 'src/app/models/get/kebele-master';

@Injectable({
  providedIn: 'root'
})
export class KebeleMasterService extends BaseService<KebeleMaster> {

  constructor(protected httpClient: HttpClient)  {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'KebeleMaster';
   }
}

