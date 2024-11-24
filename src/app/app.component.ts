import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CameraComponent } from './components/camera/camera.component';
import { VideoFeedComponent } from './video-feed/video-feed.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    VideoFeedComponent,
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BM';
}
