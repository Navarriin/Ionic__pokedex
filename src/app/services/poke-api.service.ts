import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokedex/2';
  private urlId: string = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient) {}

  getAllPokemons<T>(): Observable<any> {
    return this.http.get<T>(this.url);
  }

  getPokemon<T>(id: number): Observable<any> {
    return this.http.get<T>(`${this.urlId}/${id}`);
  }
}
