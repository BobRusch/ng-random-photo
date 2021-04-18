import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent implements OnInit {
  photoUrl = '';
  constructor(private photoService: PhotoService) {
    this.fetchPhoto();
  }

  ngOnInit(): void {}

  fetchPhoto() {
    this.photoService.getPhoto().subscribe((photo) => (this.photoUrl = photo));
  }

  onClick() {
    this.fetchPhoto();
  }
}
