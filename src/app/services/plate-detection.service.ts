import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlateDetectionService {
  
  private apiUrl = 'http://localhost:8000/api/process-frame/';

  constructor(private http: HttpClient) {}

  detectPlate(frame: Blob): Observable<any> {
    const formData = new FormData();
    formData.append('frame', frame);
    return this.http.post(this.apiUrl, formData);
  }

}
