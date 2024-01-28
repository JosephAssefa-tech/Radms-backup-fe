import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { VechicleMasterEntity } from 'src/app/models/get/vechicle-master';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VechileMasterService extends BaseService<VechicleMasterEntity> {
  private selectedWeatherRowData$ = new BehaviorSubject<any>(null);


  private weathersSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public weathers$ = this.weathersSubject.asObservable();



    listOfWeathers=`${environment.apiUrl}VechicleMasterService`;

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  getResourceUrl(): string {
    return 'VechicleMasterService';
   }
   
  getSelectedRegionRowData(): BehaviorSubject<any> {
    return this.selectedWeatherRowData$;
  }
  addRegion(region: VechicleMasterEntity): Observable<any> {
    return this.httpClient.post<any>(this.listOfWeathers, region);
  }

  updateSelectedRegionRowData(data: any): void {
    this.selectedWeatherRowData$.next(data);
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

