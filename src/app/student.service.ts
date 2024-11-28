import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'https://localhost:7278/api/student';  

  constructor(private http: HttpClient) { }

  getStudents(pageNumber: number, pageSize: number): Observable<any> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());
    console.log("Making API request")
    return this.http.get(this.apiUrl, { params }).pipe(tap((data=>console.log("Data Recieved: ",data))));
  }
}

