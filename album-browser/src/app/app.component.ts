import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="nav">
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
      <a routerLink="/albums" routerLinkActive="active">Albums</a>
    </nav>

    <router-outlet></router-outlet>
  `,
  styles: [`
    .nav {
      display: flex;
      gap: 12px;
      padding: 12px;
      border-bottom: 1px solid #ddd;
    }

    .nav a {
      text-decoration: none;
      padding: 6px 10px;
      border-radius: 6px;
      color: #333;
    }

    .nav a.active {
      background: #eee;
    }
  `]
})
export class AppComponent {}