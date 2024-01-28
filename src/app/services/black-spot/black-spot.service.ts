import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlackSpot } from 'src/app/models/get/BlackSpot';
import { environment } from 'src/environments/environment';
import { BaseService } from '../base-service/BaseService';
@Injectable({
  providedIn: 'root'
})
export class BlackSpotService  {
  // getResourceUrl(): string {
  //   throw new Error('BlackSpot');
  // }
  blackSpotEndPoint=`${environment.apiUrl}BlackSpot`;

  constructor(private http: HttpClient) {

  }

  getBlackSpots(startDate?: Date, endDate?: Date): Observable<BlackSpot[]> {
    let params = new HttpParams();
  
    if (startDate) {
      params = params.set('startDate', startDate.toISOString());
    }
  
    if (endDate) {
      params = params.set('endDate', endDate.toISOString());
    }

    return this.http.get<BlackSpot[]>(this.blackSpotEndPoint,{params});
  }
  getTotalBlackspotCount()
  {
    return this.http.get<{ blackspotCount: number }>(this.blackSpotEndPoint+'/count-blackspot');
  }
}
