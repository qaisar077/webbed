import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService, Photo } from '../album.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Photos</h2>

    <div *ngIf="loading">Loading...</div>

    <div class="grid" *ngIf="!loading">
      <div class="card" *ngFor="let p of photos">
        <img [src]="p.thumbnailUrl" [alt]="p.title" />
        <div class="cap">{{ p.title }}</div>
      </div>
    </div>

    <br />
    <button (click)="back()">Back</button>
  `,
  styles: [`
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 12px;
      padding: 12px;
    }
    .card { border: 1px solid #eee; border-radius: 10px; padding: 10px; }
    .card img { width: 100%; border-radius: 8px; }
    .cap { margin-top: 6px; font-size: 12px; }
  `],
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  loading = true;
  albumId = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(this.albumId).subscribe((data) => {
      this.photos = data;
      this.loading = false;
    });
  }

  back() {
    this.router.navigate(['/albums', this.albumId]);
  }
}