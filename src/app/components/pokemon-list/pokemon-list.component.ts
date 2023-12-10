import { Component } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  pokemons: any[] = [];
  constructor(private apiService: PokeApiService) {
    this.getPokemons();
    console.log(this.pokemons);
  }

  getPokemons() {
    this.apiService.getAllPokemons().subscribe((data) => {
      this.pokemons = data.pokemon_entries;
    });
  }
}
