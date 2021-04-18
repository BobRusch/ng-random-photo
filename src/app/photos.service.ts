import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

interface UpSplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http
      .get<UpSplashResponse>('https://api.unsplash.com/photos/random', {
        headers: {
          Authorization:
            'Client-ID sKXQS7LX_9BQpyc7TAxEldONKjtAwuMDINQaHpk_9KM',
        },
      })
      .pipe(pluck('urls', 'regular'));
  }
}
