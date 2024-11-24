import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-video-feed',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './video-feed.component.html',
  styleUrl: './video-feed.component.scss'
})
export class VideoFeedComponent {

  videoUrl = 'http://127.0.0.1:5001/video_feed'; // Ruta al feed de Flask
  plateText: string = ''; // Variable para almacenar el texto de la placa

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Usamos intervalos para obtener la última placa cada segundo
    interval(1000).subscribe(() => {
      this.http.get<{ plate: string }>('http://127.0.0.1:5001/last_plate')
        .subscribe(response => {
          this.plateText = response.plate.slice(0,7);
        });
    });
  }

}