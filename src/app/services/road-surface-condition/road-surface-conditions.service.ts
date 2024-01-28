import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RoadSurfaceCondition } from 'src/app/models/get/road-surface-condition';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoadSurfaceConditionsService extends BaseService<RoadSurfaceCondition> {
  private buttonLabelSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  listOfRoadSurfaceCondition=`${environment.apiUrl}RoadSurfaceConditionLookup`;



  private roadSurfaceSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public roadsurfaces$ = this.roadSurfaceSubject.asObservable();

  private selectedRoadSurfaceRowData$ = new BehaviorSubject<any>(null);

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  //  this.getRoadSurfaceListByLanguage();
  }
  getResourceUrl(): string {
    return 'RoadSurfaceConditionLookup';
   }
   addRegion(region: RoadSurfaceCondition): Observable<any> {
    return this.httpClient.post<any>(this.listOfRoadSurfaceCondition, region);
  }

  updateSelectedRegionRowData(data: any): void {
    this.selectedRoadSurfaceRowData$.next(data);
  }

  getSelectedRegionRowData(): BehaviorSubject<any> {
    return this.selectedRoadSurfaceRowData$;
  }
  getRoadSurfaceListByLanguage(language:string):Observable<any[]> {
    const params = { language: language };
    this.httpClient.get<any[]>(this.listOfRoadSurfaceCondition, { params: params })
      .subscribe(regions => {
        this.roadSurfaceSubject.next(regions); // Update the regions data in the BehaviorSubject
      });

    return this.roadSurfaceSubject.asObservable(); // Return the Observable of the BehaviorSubjec

  }
  // getButtonLabel(): Observable<string> {
  //   return this.buttonLabelSubject.asObservable();
  // }

  // setButtonLabel(label: string) {
  //   console.log('Label value:', label);
  //   this.buttonLabelSubject.next(label);
  // }
}
