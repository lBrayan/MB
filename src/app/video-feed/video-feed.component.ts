import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { interval } from 'rxjs';
import { environment } from '../../environments/environment.development';

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

  videoUrl = environment.backend+'/video_feed'; // Ruta al feed de Flask
  plateText: string = ''; // Variable para almacenar el texto de la placa
  readonly platformId = inject(PLATFORM_ID);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Usamos intervalos para obtener la última placa cada segundo
    if(isPlatformBrowser(this.platformId)){
      interval(1000).subscribe(() => {
        this.http.get<{ plate: string }>(environment.backend+'/last_plate')
          .subscribe(response => {
            this.plateText = response.plate.slice(0,7);
          });
      });
    }
  }

}
