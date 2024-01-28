import { Injectable } from '@angular/core';
import { BaseService } from '../base-service/BaseService';
import { VictimTypeLookup } from 'src/app/models/get/victim-type-lookup';
import { HttpClient } from '@angular/common/http';
import { VehiclesEntity } from 'src/app/models/get/vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehicleListService extends BaseService<VehiclesEntity>{

  constructor(protected httpClient: HttpClient)  {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'VehiclesEntity';
   }
}
