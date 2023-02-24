
import { NgModule, Component } from '@angular/core';
import { CommonMaterialModule } from '../common.material.module';
import { StepperModule } from '../stepper/stepper.component';
import { VideoPlayerModule } from '../video-player/video-player.component'

@Component({
  selector: 'app-presentation',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {

}

@NgModule({
  imports:[CommonMaterialModule, VideoPlayerModule, StepperModule],
  declarations:[VideoComponent]
})
export class VideoComponentModule {

}

