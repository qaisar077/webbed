import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Album Browser</h1>
    <p>Welcome to the Album Browser App.</p>
    <button routerLink="/albums">Browse Albums</button>
  `,
})
export class HomeComponent {}