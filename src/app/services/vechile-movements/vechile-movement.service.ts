import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { VehicleMovementMaster } from 'src/app/models/get/vehicle-movement-master';
import { VictimMovementMaster } from 'src/app/models/get/victim-movement-master';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VechileMovementService  extends BaseService<VehicleMovementMaster>{
  listOfVechileDefects=`${environment.apiUrl}VehicleMovementMaster`;

  private selectedVechileRowData$ = new BehaviorSubject<any>(null);

  private vechilesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public vechiles$ = this.vechilesSubject.asObservable();

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'VehicleMovementMaster';
   }
   getVechilesListByLanguage(language:string):Observable<any[]> {
    const params = { language: language };
    this.httpClient.get<any[]>(this.listOfVechileDefects, { params: params })
      .subscribe(vechiles => {
        this.vechilesSubject.next(vechiles); // Update the regions data in the BehaviorSubject
      });

    return this.vechilesSubject.asObservable(); // Return the Observable of the BehaviorSubject


  }
  updateVechileDefect(regions: any[]): void {
    this.vechilesSubject.next(regions);
  }
  // addRegion(region: any) {
  //   // Your logic to add the region to the backend
  //   this.regions.push(region); // Append the newly added region to the existing regions
  // }
  addVechileDefect(vechile:VehicleMovementMaster): Observable<any> {
    return this.httpClient.post<any>(this.listOfVechileDefects, vechile);
  }

  updateSelectedVechileDefectRowData(data: any): void {
    this.selectedVechileRowData$.next(data);
  }

  getSelectedVechileDefectRowData(): BehaviorSubject<any> {
    return this.selectedVechileRowData$;
  }
}
