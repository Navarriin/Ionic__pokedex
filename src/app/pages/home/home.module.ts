import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './home-routing.module';

import { FolderPage } from './home.page';
import { PokemonListComponent } from '../../components/pokemon-list/pokemon-list.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FolderPageRoutingModule],
  declarations: [FolderPage, PokemonListComponent],
})
export class FolderPageModule {}
