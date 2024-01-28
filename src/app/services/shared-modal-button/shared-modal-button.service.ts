import { BaseService } from '../base-service/BaseService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedButtonLabelService{
  private buttonLabelSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');


  constructor(protected httpClient: HttpClient) {


  }




  getButtonLabel(): Observable<string> {
    return this.buttonLabelSubject.asObservable();
  }

  setButtonLabel(label: string) {
    this.buttonLabelSubject.next(label);
  }



}
