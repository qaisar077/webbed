import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  // Инлайновый шаблон (template) заменяет templateUrl
  template: `
    <header>
      <h1>Kaspi.kz Online Store</h1>
    </header>
    <main>
      <app-product-list></app-product-list>
    </main>
  `,
  // Инлайновые стили (styles) заменяют styleUrls
  styles: [`
    header {
      background-color: #f8f9fa;
      padding: 1rem;
      text-align: center;
      border-bottom: 1px solid #ddd;
      margin-bottom: 20px;
    }
    h1 { color: #e11d48; } 
  `]
})
export class AppComponent { }