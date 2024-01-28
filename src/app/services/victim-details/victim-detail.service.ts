import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base-service/BaseService';
import { VictimDetailsTransaction } from 'src/app/models/get/victim-details-transaction';
import { SummaryCount } from 'src/app/models/get/SummaryCount';
import { environment } from 'src/environments/environment';
import { SummaryData } from 'src/app/models/get/SummaryData';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VictimDetailService extends BaseService<VictimDetailsTransaction>{
  summaryData=`${environment.apiUrl}VictimDetailsTransaction/grouped-data`;

   dateFilterSubject = new BehaviorSubject<{ startDate?: Date, endDate?: Date }>({});


  constructor(protected httpClient: HttpClient)  {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'VictimDetailsTransaction';
   }
  //  getGroupedData(startDate?: Date, endDate?: Date)
  //  {
  //     // Create HTTP params with the start and end date values
  //     let params = new HttpParams();
  //     if (startDate) {
  //       params = params.set('startDate', startDate.toISOString()); // Convert Date to ISO string format
  //     }
  //     if (endDate) {
  //       params = params.set('endDate', endDate.toISOString());
  //     }
      
  //     return this.httpClient.get<SummaryData[]>(this.summaryData, { params });
  //  }
  getDateFilter(): Observable<{ startDate?: Date, endDate?: Date }> {
    return this.dateFilterSubject.asObservable();
  }
  
  setDateFilter(startDate?: Date, endDate?: Date): void {

    this.dateFilterSubject.next({ startDate, endDate });
    console.log('Selected Start Date:', startDate);
    console.log('Selected End Date:', endDate);
  }
  getGroupedData(startDate?: Date, endDate?: Date): Observable<SummaryData[]> {
    let params = new HttpParams();
    
    // Retrieve the date filter values from the BehaviorSubject
    const filter = this.dateFilterSubject.getValue();
    
    // Use the provided start and end dates if available, otherwise use the filter values
    if (startDate) {
      params = params.set('startDate', startDate.toISOString());
    } else if (filter.startDate) {
      params = params.set('startDate', filter.startDate.toISOString());
    }
    
    if (endDate) {
      params = params.set('endDate', endDate.toISOString());
    } else if (filter.endDate) {
      params = params.set('endDate', filter.endDate.toISOString());
    }
    

    
    return this.httpClient.get<SummaryData[]>(this.summaryData, { params });
  }
  
  

}
