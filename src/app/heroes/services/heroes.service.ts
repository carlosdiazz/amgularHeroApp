import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Hero } from '../interface/hero.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  constructor(private httpClient: HttpClient) {}
  private baseUrl: string = environment.baseUrl;

  getHeroes(): Observable<Hero[]> {
    console.log('Por aca');
    return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id: string): Observable<Hero | undefined> {
    return this.httpClient.get<Hero>(`${this.baseUrl}/heroes/${id}`).pipe(
      catchError((error) => {
        //Con esto hago un nuevo Obserbacnle que devuelva undefined
        return of(undefined);
      })
    );
  }

  getSuggestions(query: string): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}`);
  }
}
