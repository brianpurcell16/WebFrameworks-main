import { Component, OnInit } from '@angular/core';
import { MReviewDataService } from '../mreview-data.service';

export class Review{
  movieName!: String;
  review!: String;
  reviewer!: String;
  date!: String;
  rating!: number;

}

@Component({
  selector: 'app-home-list',
  standalone: false,
  
  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.css',
  providers: [MReviewDataService]
})

export class HomeListComponent implements OnInit {
  constructor(private MReviewDataService: MReviewDataService) { }

  reviews: Review [] = [];


  private getReviews(): void {
    this.MReviewDataService
    .getReviews()
    .then(foundReviews => {
    this.reviews = foundReviews;
    });
    }

  ngOnInit() { 
    this.getReviews();
  }
  }

  
