import { AirConditionType } from 'src/app/models/get/air-condition';
import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirconditionService extends BaseService<AirConditionType>{
  listOfAirCondition=`${environment.apiUrl}AirConditionType`;
  private airConditionSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public airConditions$ = this.airConditionSubject.asObservable();

  private selectedAirConditionRowData$ = new BehaviorSubject<any>(null);

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'AirConditionType';
   }
   updateHealthConditions(healths: any[]): void {
    this.airConditionSubject.next(healths);
  }
  // addRegion(region: any) {
  //   // Your logic to add the region to the backend
  //   this.regions.push(region); // Append the newly added region to the existing regions
  // }
  addHealthCondition(health: AirConditionType): Observable<any> {
    return this.httpClient.post<any>(this.listOfAirCondition, health);
  }

  updateSelectedAirConditionRowData(data: any): void {
    this.selectedAirConditionRowData$.next(data);
  }

  getSelectedHealthConditionRowData(): BehaviorSubject<any> {
    return this.selectedAirConditionRowData$;
  }
  getAirConditionsListByLanguage(language:string):Observable<any[]> {
    const params = { language: language };
    this.httpClient.get<any[]>(this.listOfAirCondition, { params: params })
      .subscribe(regions => {
        this.airConditionSubject.next(regions); // Update the regions data in the BehaviorSubject
      });

    return this.airConditionSubject.asObservable(); // Return the Observable of the BehaviorSubjec

  }
}
