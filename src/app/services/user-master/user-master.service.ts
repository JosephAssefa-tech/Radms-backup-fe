import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TerrainType } from 'src/app/models/get/terrain-type';
import { UserMaster } from 'src/app/models/get/user-master';

@Injectable({
  providedIn: 'root'
})
export class UserMasterService extends BaseService<UserMaster>{

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'UserMaster';
   }
}
