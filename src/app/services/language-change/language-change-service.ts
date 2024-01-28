import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LanguageService {
  private selectedLanguageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('english');
  private languageData: any;

  constructor(private http: HttpClient) {
     this.loadLanguageData(this.selectedLanguageSubject.value);
  }

  get selectedLanguage$(): Observable<string> {
    return this.selectedLanguageSubject.asObservable();
  }

  get selectedLanguage(): string {
    return this.selectedLanguageSubject.value;
  }

  set selectedLanguage(language: string) {
    if (this.selectedLanguage !== language) {
      this.loadLanguageData(language);
      this.selectedLanguageSubject.next(language);
    }
  }

  private loadLanguageData(language: string): void {
    const languageFilePath = `assets/languages/${language}.json`;
    this.http.get(languageFilePath).subscribe(
      (data: any) => {
        this.languageData = data;
      },
      (error: any) => {
        console.error(`Failed to load language data for '${language}':`, error);
      }
    );
  }
  

  getTranslation(key: string): string {
    if (this.languageData && this.languageData[key]) {
      return this.languageData[key];
    }
    return key; // Return the key itself if translation is not found
  }
}
