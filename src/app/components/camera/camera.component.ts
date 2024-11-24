import { Component, ElementRef, inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { PlateDetectionService } from '../../services/plate-detection.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-camera',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './camera.component.html',
  styleUrl: './camera.component.scss',
  providers: [PlateDetectionService]
})
export class CameraComponent {

  @ViewChild('videoElement') videoElement!: ElementRef;
  detectedText: string = '';
  data64Img:string = '';
  readonly platformID = inject(PLATFORM_ID);

  constructor(private http: HttpClient) { }

  ngOnInit() {
    if(isPlatformBrowser(this.platformID)){
      this.startCamera();
      if(isPlatformBrowser(this.platformID)){
        interval(500).subscribe(() => {
          this.captureFrame()
        });
      }
    }
  }

  startCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        this.videoElement.nativeElement.srcObject = stream;
      })
      .catch((err) => {
        console.error('Error al acceder a la cámara: ', err);
      });
  }

  captureFrame() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // Configurar el tamaño del canvas igual al video
    canvas.width = this.videoElement.nativeElement.videoWidth;
    canvas.height = this.videoElement.nativeElement.videoHeight;

    // Dibujar el frame actual del video en el canvas
    context?.drawImage(this.videoElement.nativeElement, 0, 0);

    // Convertir el canvas a una imagen base64
    const imageData = canvas.toDataURL('image/jpeg');
    this.data64Img = imageData;

    // Enviar la imagen al servidor para procesamiento
    this.sendFrameToServer(imageData);
  }

  sendFrameToServer(imageData: string) {
    this.http.post(environment.backend+'/detect_plate', { image: imageData })
      .subscribe((response: any) => {
        this.detectedText = response.plate.slice(0,7);
      }, (error:any) => {
        console.error('Error al enviar la imagen al servidor', error);
      });
  }

}
