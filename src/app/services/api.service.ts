import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const API_KEY = 'bdd10d2b8f52bc0a5320d5c9d88bd1ff';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data: object[]
  username: string;
  constructor(
    private _httpClient :HttpClient
  ) { }

  // https://api.themoviedb.org/3/trending/all/day?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff'
    getMovies(type) : Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/${type}/all/day?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff`)
    // return this._httpClient.get(`https://jsonplaceholder.typicode.com/todos/1`)
    }
  
  getDetials(id) : Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
  }
}
