import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LegalMeasurementDetailsTransaction } from 'src/app/models/get/legal-easurement-details';

@Injectable({
  providedIn: 'root'
})
export class LegalMeasurementService extends BaseService<LegalMeasurementDetailsTransaction> {

  constructor(protected httpClient: HttpClient)  {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'LegalMeasurementDetailsTransaction';
   }
}




