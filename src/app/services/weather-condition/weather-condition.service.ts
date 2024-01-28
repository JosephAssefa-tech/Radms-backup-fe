import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WeatherCondition } from 'src/app/models/get/weather-condition-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherConditionService extends BaseService<WeatherCondition> {
    //the below is for listing regions
    private selectedWeatherRowData$ = new BehaviorSubject<any>(null);


  private weathersSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public weathers$ = this.weathersSubject.asObservable();



    listOfWeathers=`${environment.apiUrl}WeatherConditionType`;

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'WeatherConditionType';
   }
   addRegion(region: WeatherCondition): Observable<any> {
    return this.httpClient.post<any>(this.listOfWeathers, region);
  }

  updateSelectedRegionRowData(data: any): void {
    this.selectedWeatherRowData$.next(data);
  }

  getSelectedRegionRowData(): BehaviorSubject<any> {
    return this.selectedWeatherRowData$;
  }
  getWeathersListByLanguage(language:string):Observable<any[]> {
    const params = { language: language };
    this.httpClient.get<any[]>(this.listOfWeathers, { params: params })
      .subscribe(regions => {
        this.weathersSubject.next(regions); // Update the regions data in the BehaviorSubject
      });

    return this.weathersSubject.asObservable(); // Return the Observable of the BehaviorSubject


  }
}
