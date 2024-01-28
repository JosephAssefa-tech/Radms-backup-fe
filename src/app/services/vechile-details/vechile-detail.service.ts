import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehicleDetailsTransaction } from 'src/app/models/get/vehicle-details-transaction';

@Injectable({
  providedIn: 'root'
})
export class VechileDetailService extends BaseService<VehicleDetailsTransaction> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'VehicleDetailsTransaction';
   }
}
