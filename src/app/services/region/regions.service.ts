import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RegionBasedSummaryData, SummaryCount } from 'src/app/models/get/SummaryCount';
import { SummaryData } from 'src/app/models/get/SummaryData';
import { RegionMaster } from 'src/app/models/post/region-master-model';
import { environment } from 'src/environments/environment';
import { LanguageService } from '../language-change/language-change-service';

@Injectable({
  providedIn: 'root'
})
export class RegionsService extends BaseService<RegionMaster> {
  private buttonLabelSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  //the below is for listing regions
  private selectedRegionRowData$ = new BehaviorSubject<any>(null);


  private regionsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public regions$ = this.regionsSubject.asObservable();


  private deathCountSubject = new BehaviorSubject<number>(0);
  private seriousCountSubject = new BehaviorSubject<number>(0);
  private slightCountSubject = new BehaviorSubject<number>(0);
  private propertyDamageCountSubject = new BehaviorSubject<number>(0);

  deathCount$ = this.deathCountSubject.asObservable();
  seriousCount$ = this.seriousCountSubject.asObservable();
  slightCount$ = this.slightCountSubject.asObservable();
  propertyDamageCount$ = this.propertyDamageCountSubject.asObservable();

 listOfRegions=`${environment.apiUrl}RegionMaster`;
  totalVictimEndPoint=`${environment.apiUrl}VictimDetailsTransaction/grouped-region-data?`;
  constructor(protected httpClient: HttpClient,private languageService:LanguageService) {
    super(httpClient);
    this.languageService.selectedLanguage$.subscribe(language => {
    this.getRegionsListByLanguage(language);
    });
  }

  getResourceUrl(): string {
    return 'RegionMaster';
   }
  //  getDataByRegion(regionId: number):Observable<any>
  //  {


  //   let params = { regionId };
  //   return this.httpClient.get<any>(this.totalVictimEndPoint, { params: { regionId } });
  //  }
  getDataByRegion(regionId: number, startDate?: Date, endDate?: Date): Observable<any> {
    let params: any = { regionId };
  
    if (startDate) {
      params.startDate = startDate.toISOString();
    }
  
    if (endDate) {
      params.endDate = endDate.toISOString();
    }
  
    return this.httpClient.get<any>(this.totalVictimEndPoint, { params });
  }
  
   updateCounts(deathCount: number, seriousCount: number, slightCount: number, propertyDamageCount: number) {
    this.deathCountSubject.next(deathCount);
    this.seriousCountSubject.next(seriousCount);
    this.slightCountSubject.next(slightCount);
    this.propertyDamageCountSubject.next(propertyDamageCount);
  }
  getRegionsListByLanguage(language:string):Observable<any[]> {
    const params = { language: language };
    this.httpClient.get<any[]>(this.listOfRegions, { params: params })
      .subscribe(regions => {
        this.regionsSubject.next(regions); // Update the regions data in the BehaviorSubject
      });

    return this.regionsSubject.asObservable(); // Return the Observable of the BehaviorSubject


  }
  updateRegions(regions: any[]): void {
    this.regionsSubject.next(regions);
  }
  // addRegion(region: any) {
  //   // Your logic to add the region to the backend
  //   this.regions.push(region); // Append the newly added region to the existing regions
  // }
  addRegion(region: RegionMaster): Observable<any> {
    return this.httpClient.post<any>(this.listOfRegions, region);
  }

  updateSelectedRegionRowData(data: any): void {
    this.selectedRegionRowData$.next(data);
  }

  getSelectedRegionRowData(): BehaviorSubject<any> {
    return this.selectedRegionRowData$;
  }

  getButtonLabel(): Observable<string> {
    return this.buttonLabelSubject.asObservable();
  }

  setButtonLabel(label: string) {
    console.log('Label value:', label);
    this.buttonLabelSubject.next(label);
  }



}
