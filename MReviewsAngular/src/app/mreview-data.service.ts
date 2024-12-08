import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Review } from './home-list/home-list.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MReviewDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api';

  public getReviews(): Observable<Review[]> {

    const url: string = `${this.apiBaseUrl}/review`;
    console.log('Requesting reviews from:', url);
    return this.http.get<Review[]>(url);
     
  }

  
    }

