import { BaseService } from '../base-service/BaseService';
import { CityMaster } from 'src/app/models/get/city';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService extends BaseService<CityMaster> {
  private citiesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public cities$ = this.citiesSubject.asObservable();

  listOfCities=`${environment.apiUrl}CityMaster`;

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'CityMaster';
   }
   getCitiesListByLanguage(language:string)
   :Observable<any[]> {
    const params = { language: language };
    this.httpClient.get<any[]>(this.listOfCities, { params: params })
      .subscribe(city => {
        this.citiesSubject.next(city); // Update the regions data in the BehaviorSubject
      });

    return this.citiesSubject.asObservable(); // Return the Observable of the BehaviorSubject


  }
}
