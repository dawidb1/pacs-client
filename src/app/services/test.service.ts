import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private http: HttpClient) {}

  getTestData(): Observable<boolean> {
    return this.http.get<boolean>('/api/sampledata/test');
  }
}
