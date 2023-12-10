import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokedex/2';
  constructor(private http: HttpClient) {}

  getAllPokemons<T>(): Observable<any> {
    return this.http.get<T>(this.url);
  }
}
