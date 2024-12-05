import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Review } from './home-list/home-list.component';

@Injectable({
  providedIn: 'root'
})
export class MReviewDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'https://localhost:3000/api/';

  public getReviews(): Promise<Review[]> {

    const url: string =
          `${this.apiBaseUrl}/review `;
          return this.http
          .get(url)
          .toPromise()
          .then(response => response as Review[])
          .catch(this.handleError);
        }
        private handleError(error: any): Promise<any> {
          console.error('Something has gone wrong', error);
          return Promise.reject(error.message || error);
        }
    
    }

