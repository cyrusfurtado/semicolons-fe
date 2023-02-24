
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
  
  preview(url?: string)
  {
    console.log("Preview ", url);
  }

  download(url?: string)
  {
    let a = document.createElement('a');
    a.href = url || "";
    a.click();
    a.remove();
  }
}

@NgModule({
  imports:[CommonMaterialModule, VideoPlayerModule, StepperModule],
  declarations:[VideoComponent]
})
export class VideoComponentModule {

}

