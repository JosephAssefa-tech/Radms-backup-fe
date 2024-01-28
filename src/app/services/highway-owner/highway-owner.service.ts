import { BaseService } from '../base-service/BaseService';
import { HighwayOwnerMaster } from 'src/app/models/get/highway-owner';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HighwayOwnerService extends BaseService<HighwayOwnerMaster> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'HighwayOwnerMaster';
   }
}

