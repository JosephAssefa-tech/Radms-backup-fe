import { BehaviorSubject, Observable, of } from 'rxjs';

import { BaseService } from '../base-service/BaseService';
import { CityMaster } from 'src/app/models/get/city';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubCityMaster } from 'src/app/models/get/subcity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubCityService extends BaseService<SubCityMaster>{
  private subCitiesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public subCities$ = this.subCitiesSubject.asObservable();

  listOfSubCities=`${environment.apiUrl}SubCityMaster`;



  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'SubCityMaster';
   }
   getSubCitiesListByLanguage(language:string)
   :Observable<any[]> {
    const params = { language: language };
    this.httpClient.get<any[]>(this.listOfSubCities, { params: params })
      .subscribe(subCity => {
        this.subCitiesSubject.next(subCity); // Update the regions data in the BehaviorSubject
      });

    return this.subCitiesSubject.asObservable(); // Return the Observable of the BehaviorSubject


  }
}
