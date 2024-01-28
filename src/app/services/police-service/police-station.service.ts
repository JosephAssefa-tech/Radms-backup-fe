import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoliceStation } from 'src/app/models/get/police-station';

@Injectable({
  providedIn: 'root'
})
export class PoliceStationService  extends BaseService<PoliceStation>{

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'PoliceStationMaster';
   }
}
