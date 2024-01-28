import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsBaseStateService {
private formValues = new BehaviorSubject<any>({});
constructor()
{
}
setFormValues(values:any):void {
  this.formValues.next(values);
}
getFormValues():Observable<any>{
  return this.formValues.asObservable();
}
}
