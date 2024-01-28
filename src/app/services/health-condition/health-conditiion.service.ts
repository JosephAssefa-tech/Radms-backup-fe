import { BaseService } from '../base-service/BaseService';
import { HealthCondition } from 'src/app/models/get/health-condition';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HealthConditiionService extends BaseService<HealthCondition>  {
  listOfHealthCondition=`${environment.apiUrl}HealthCondition`;
  private healthsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public healths$ = this.healthsSubject.asObservable();

  private selectedHealthConditionRowData$ = new BehaviorSubject<any>(null);
  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'HealthCondition';
   }
   updateHealthConditions(healths: any[]): void {
    this.healthsSubject.next(healths);
  }
  // addRegion(region: any) {
  //   // Your logic to add the region to the backend
  //   this.regions.push(region); // Append the newly added region to the existing regions
  // }
  addHealthCondition(health: HealthCondition): Observable<any> {
    return this.httpClient.post<any>(this.listOfHealthCondition, health);
  }

  updateSelectedHealthConditionRowData(data: any): void {
    this.selectedHealthConditionRowData$.next(data);
  }

  getSelectedHealthConditionRowData(): BehaviorSubject<any> {
    return this.selectedHealthConditionRowData$;
  }
  getHealthsListByLanguage(language:string):Observable<any[]> {
    const params = { language: language };
    this.httpClient.get<any[]>(this.listOfHealthCondition, { params: params })
      .subscribe(regions => {
        this.healthsSubject.next(regions); // Update the regions data in the BehaviorSubject
      });

    return this.healthsSubject.asObservable(); // Return the Observable of the BehaviorSubjec

  }
}
