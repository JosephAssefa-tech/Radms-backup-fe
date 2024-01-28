import { Injectable } from '@angular/core';
import { BaseService } from '../base-service/BaseService';
import { LevelOfLicence } from 'src/app/models/get/level-of-licence';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LevelOfLicenceService extends BaseService<LevelOfLicence>{

  constructor(protected httpClient: HttpClient)  {
    super(httpClient);
  }

  getResourceUrl(): string {
    return 'LicenceLevel';
   }
}
