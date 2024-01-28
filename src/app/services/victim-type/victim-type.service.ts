import { Injectable } from '@angular/core';
import { VictimTypeLookup } from 'src/app/models/get/victim-type-lookup';
import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VictimTypeService extends BaseService<VictimTypeLookup> {
  private buttonLabelSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  listOfVechiles=`${environment.apiUrl}VictimType`;

  private selectedVechileRowData$ = new BehaviorSubject<any>(null);

  private vechilesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public vechiles$ = this.vechilesSubject.asObservable();

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
 
  getResourceUrl(): string {
    return 'VictimType';
   }
   getVechilesListByLanguage(language:string):Observable<any[]> {
    const params = { language: language };
    this.httpClient.get<any[]>(this.listOfVechiles, { params: params })
      .subscribe(vechiles => {
        this.vechilesSubject.next(vechiles); // Update the regions data in the BehaviorSubject
      });

    return this.vechilesSubject.asObservable(); // Return the Observable of the BehaviorSubject


  }
  updateRegions(regions: any[]): void {
    this.vechilesSubject.next(regions);
  }
  // addRegion(region: any) {
  //   // Your logic to add the region to the backend
  //   this.regions.push(region); // Append the newly added region to the existing regions
  // }
  addRegion(vechile: VictimTypeLookup): Observable<any> {
    return this.httpClient.post<any>(this.listOfVechiles, vechile);
  }

  updateSelectedRegionRowData(data: any): void {
    this.selectedVechileRowData$.next(data);
  }

  getSelectedRegionRowData(): BehaviorSubject<any> {
    return this.selectedVechileRowData$;
  }
}
