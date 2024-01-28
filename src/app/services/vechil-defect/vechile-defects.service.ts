import { Injectable } from '@angular/core';
import { VehicleDefect } from 'src/app/models/get/vehicle-defect';
import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VechileDefectsService extends BaseService<VehicleDefect>{
  private buttonLabelSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  listOfVechileDefects=`${environment.apiUrl}VehicleDefect`;


  private selectedVechileDefectRowData$ = new BehaviorSubject<any>(null);

  private vechilesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public vechiles$ = this.vechilesSubject.asObservable();

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'VehicleDefect';
   }
   getVechilesListByLanguage(language:string):Observable<any[]> {
    const params = { language: language };
    this.httpClient.get<any[]>(this.listOfVechileDefects, { params: params })
      .subscribe(vechiles => {
        this.vechilesSubject.next(vechiles); // Update the regions data in the BehaviorSubject
      });

    return this.vechilesSubject.asObservable(); // Return the Observable of the BehaviorSubject


  }
  updateVechileDefects(regions: any[]): void {
    this.vechilesSubject.next(regions);
  }
  // addRegion(region: any) {
  //   // Your logic to add the region to the backend
  //   this.regions.push(region); // Append the newly added region to the existing regions
  // }
  addVechileDefect(vechile: VehicleDefect): Observable<any> {
    return this.httpClient.post<any>(this.listOfVechileDefects, vechile);
  }

  updateSelectedVechileDefectRowData(data: any): void {
    this.selectedVechileDefectRowData$.next(data);
  }

  getSelectedVechileDefectRowData(): BehaviorSubject<any> {
    return this.selectedVechileDefectRowData$;
  }
  
}
