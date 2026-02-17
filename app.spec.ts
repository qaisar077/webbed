import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component'; // Проверьте правильность импорта
import { provideRouter } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Если AppComponent помечен как standalone: true
      imports: [AppComponent], 
      // Добавляем провайдеры, если в компоненте есть роутинг или зависимости
      providers: [provideRouter([])] 
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Обязательно вызываем для рендеринга шаблона
    const compiled = fixture.nativeElement as HTMLElement;
    
    // Проверяем, что в h1 действительно текст 'Hello, online-store'
    // Убедитесь, что в app.component.html у вас есть тег <h1>
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, online-store');
  });
});