import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Album, AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Albums</h2>

    <div *ngIf="loading">Loading...</div>
    <div *ngIf="!loading && albums.length === 0">No albums.</div>

    <ul class="list" *ngIf="!loading && albums.length > 0">
      <li class="item" *ngFor="let a of albums" (click)="open(a.id)">
        <div class="title"><b>#{{ a.id }}</b> — {{ a.title }}</div>
        <button class="del" (click)="delete(a.id, $event)">Delete</button>
      </li>
    </ul>
  `,
  styles: [`
    .list { list-style: none; padding: 0; margin: 12px; }
    .item {
      display: flex; justify-content: space-between; gap: 12px;
      padding: 10px; border: 1px solid #eee; border-radius: 10px;
      margin-bottom: 10px; cursor: pointer;
    }
    .item:hover { background: #fafafa; }
    .del {
      border: 1px solid #ddd; background: white;
      border-radius: 8px; padding: 6px 10px; cursor: pointer;
    }
    .del:hover { background: #f2f2f2; }
  `],
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;

  constructor(private albumService: AlbumService, private router: Router) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((data) => {
      this.albums = data;
      this.loading = false;
    });
  }

  open(id: number) {
    this.router.navigate(['/albums', id]);
  }

  delete(id: number, e: MouseEvent) {
    e.stopPropagation();
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter((x) => x.id !== id);
    });
  }
}