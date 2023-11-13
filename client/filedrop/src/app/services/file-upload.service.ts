import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private baseUrl = 'http://localhost:8082';

  constructor(private http: HttpClient) {}

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest(
      'POST',
      `${this.baseUrl}/files/upload`,
      formData,
      {
        reportProgress: true,
        responseType: 'json',
      }
    );

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files/all`);
  }

  deleteFile(fileName: string): Observable<any> {
    console.log(`${this.baseUrl}/files/${fileName}`);
    return this.http.delete(`${this.baseUrl}/files/${fileName}`);
  }

  deleteAllFiles(): Observable<any> {
    console.log('deleting all files...');
    return this.http.delete(`${this.baseUrl}/files/all`);
  }
}
