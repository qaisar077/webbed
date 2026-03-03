import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { Album, AlbumService } from '../album.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <h2>Album Detail</h2>

    <div *ngIf="loading">Loading...</div>

    <div *ngIf="!loading && album">
      <p><b>ID:</b> {{ album.id }}</p>
      <p><b>User ID:</b> {{ album.userId }}</p>

      <label>
        <b>Title:</b>
        <input class="inp" [(ngModel)]="album.title" />
      </label>

      <div class="btns">
        <button (click)="save()" [disabled]="saving">
          {{ saving ? 'Saving...' : 'Save' }}
        </button>

        <button [routerLink]="['/albums', album.id, 'photos']">View Photos</button>
        <button (click)="back()">Back</button>
      </div>
    </div>
  `,
  styles: [`
    .inp { display:block; margin-top: 6px; padding: 8px; width: min(520px, 95%); }
    .btns { margin-top: 12px; display:flex; gap: 10px; flex-wrap: wrap; }
  `],
})
export class AlbumDetailComponent implements OnInit {
  album?: Album;
  loading = true;
  saving = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe((data) => {
      this.album = data;
      this.loading = false;
    });
  }

  save() {
    if (!this.album) return;
    this.saving = true;
    this.albumService.updateAlbum(this.album).subscribe(() => {
      this.saving = false;
    });
  }

  back() {
    this.router.navigate(['/albums']);
  }
}