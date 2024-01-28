import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoadsInvolvedDetailsTransaction } from 'src/app/models/get/roads-involved-details';

@Injectable({
  providedIn: 'root'
})
export class RoadsInvolvedDetailService extends BaseService<RoadsInvolvedDetailsTransaction> {


  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'RoadsInvolvedDetailsTransaction';
   }
}
