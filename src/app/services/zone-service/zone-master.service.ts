import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ZoneMaster } from 'src/app/models/get/zone';
import { BaseService } from '../base-service/BaseService';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ZoneMasterService extends BaseService<ZoneMaster> {
  private zonesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private selectedZoneRowData$ = new BehaviorSubject<any>(null);
  public zones$ = this.zonesSubject.asObservable();

  listOfZones=`${environment.apiUrl}ZoneMaster`;

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'ZoneMaster';
   }
   getZonesListByLanguage(language:string)
   :Observable<any[]> {
    const params = { language: language };
    this.httpClient.get<any[]>(this.listOfZones, { params: params })
      .subscribe(zones => {
        this.zonesSubject.next(zones); // Update the regions data in the BehaviorSubject
      });

    return this.zonesSubject.asObservable(); // Return the Observable of the BehaviorSubject


  }
  updateSelectedZoneRowData(data: any): void {
    this.selectedZoneRowData$.next(data);
  }

  getSelectedZoneRowData(): BehaviorSubject<any> {
    return this.selectedZoneRowData$;
  }
}
