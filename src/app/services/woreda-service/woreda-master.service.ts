import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { WoredaMaster } from 'src/app/models/get/woreda';
import { BaseService } from '../base-service/BaseService';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WoredaMasterService extends BaseService<WoredaMaster> {
  private woredaSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public woredas$ = this.woredaSubject.asObservable();
  listOfWoredas=`${environment.apiUrl}WoredaMaster`;

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  getResourceUrl(): string {
    return 'WoredaMaster';
   }
   getWoredasListByLanguage(language:string)
   :Observable<any[]> {
    const params = { language: language };
    this.httpClient.get<any[]>(this.listOfWoredas, { params: params })
      .subscribe(wordas => {
        this.woredaSubject.next(wordas); // Update the regions data in the BehaviorSubject
      });

    return this.woredaSubject.asObservable(); // Return the Observable of the BehaviorSubject


  }
}
