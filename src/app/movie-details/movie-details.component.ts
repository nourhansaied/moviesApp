import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieID;
  movieDetailsData;
  baseImageURL = 'https://image.tmdb.org/t/p/w500';

  constructor(private _activatedRoute: ActivatedRoute, private _api: ApiService) { 
    
    this.movieID = _activatedRoute.snapshot.params.movieID;
    this.getDetails(this.movieID)
  }


  getDetails(id) {
    this._api.getDetials(id).subscribe(details => {
      this.movieDetailsData = details;
      console.log(this.movieDetailsData)
    })
  }

  ngOnInit(): void {
  }

}
