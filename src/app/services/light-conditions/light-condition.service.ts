import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LightCondition } from 'src/app/models/get/light-condition';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LightConditionService extends BaseService<LightCondition> {
  listOfLightCondition=`${environment.apiUrl}LightCondition`;
  private lightsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public lights$ = this.lightsSubject.asObservable();

  private selectedLightConditionRowData$ = new BehaviorSubject<any>(null);




  constructor(protected httpClient: HttpClient)  {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'LightCondition';
   }

   updateAirConditions(healths: any[]): void {
    this.lightsSubject.next(healths);
  }
  // addRegion(region: any) {
  //   // Your logic to add the region to the backend
  //   this.regions.push(region); // Append the newly added region to the existing regions
  // }
  addHealthCondition(health: LightCondition): Observable<any> {
    return this.httpClient.post<any>(this.listOfLightCondition, health);
  }

  updateSelectedLightConditionRowData(data: any): void {
    this.selectedLightConditionRowData$.next(data);
  }

  getSelectedAirConditionRowData(): BehaviorSubject<any> {
    return this.selectedLightConditionRowData$;
  }
  getLightsListByLanguage(language:string):Observable<any[]> {
    const params = { language: language };
    this.httpClient.get<any[]>(this.listOfLightCondition, { params: params })
      .subscribe(regions => {
        this.lightsSubject.next(regions); // Update the regions data in the BehaviorSubject
      });

    return this.lightsSubject.asObservable(); // Return the Observable of the BehaviorSubjec

  }

}

