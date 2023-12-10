import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from 'src/app/services/poke-api.service';
import { Pokemon } from 'src/app/types/Pokemon.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  pokemonName!: Pokemon;
  pokemonId!: Pokemon;
  types!: Pokemon[];
  stats!: Pokemon[];

  constructor(private api: PokeApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.getPokemon(id);
    });
  }

  getPokemon(id: number): void {
    this.api.getPokemon(id).subscribe((data) => {
      this.pokemonName = data.name;
      this.pokemonId = data.id;
      this.types = data.types;
      this.stats = data.stats;
    });
  }
}
