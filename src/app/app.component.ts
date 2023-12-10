import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Pokemons', url: '/folder/inbox', icon: 'logo-angular' },
  ];
  public labels = ['Pokemons', 'Testes'];
  constructor() {}
}
