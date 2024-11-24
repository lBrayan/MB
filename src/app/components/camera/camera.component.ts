import { Component } from '@angular/core';
import { PlateDetectionService } from '../../services/plate-detection.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-camera',
  standalone: true,
  imports: [
    HttpClientModule
  ],
  templateUrl: './camera.component.html',
  styleUrl: './camera.component.scss',
  providers: [PlateDetectionService]
})
export class CameraComponent {

  constructor(private plateService: PlateDetectionService) {}

  ngAfterViewInit(): void {
    this.startCamera()
  }

  startCamera() {
    const video = document.querySelector('video')!;
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
      });
  }

  captureFrame() {
    const canvas = document.createElement('canvas');
    const video = document.querySelector('video')!;
    const context = canvas.getContext('2d')!;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      if (blob) {
        this.plateService.detectPlate(blob).subscribe((response) => {
          console.log('Placa detectada:', response.plate);
        });
      }
    });
  }

}
