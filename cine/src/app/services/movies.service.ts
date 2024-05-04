import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://api.myjson.online/v1/records/d3de84a2-ed02-4859-ab7c-7625f0bbb26d';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.data.featuredMovies)
    );
  }
}
