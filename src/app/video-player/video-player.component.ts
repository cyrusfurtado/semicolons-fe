import { Component, Input, NgModule } from '@angular/core';

import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { TranferDataToViewService } from '../shared/tranfer-data-to-view.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {
  @Input() vid_url : any = "../../assets/video/video_demo.mp4";

  video_url = "../../assets/video/satoutput4.mp4";
  video_url2 = "../../assets/video/fridayoutput.mp4";

  constructor(private transfer: TranferDataToViewService) {
    // this.transfer.getInfo()
    // .subscribe(value => {
    //   this.video_url = value;
    // });
  }

  // options = {};

  // player = videojs('my-player', this.options, function onPlayerReady() {
  // videojs.log('Your player is ready!');

  // // In this context, `this` is the player that was created by Video.js.
  // videojs.getPlayer(document.getElementById('my-player') || "").play();

  // How about an event listener?
  // videojs.getPlayer(document.getElementById('my-player') || "").on('ended', function() {
  //   videojs.log('Awww...over so soon?!');
  // });
// });



  // player: videojs.;


  // ngOnInit() {
  //   const options: VideoJsPlayerOptions = {
  //     sources: [{

  //     }]
  //   }
  // }

  changeVid()
  {
    // let videoCon = document.getElementById('videoCon');
    // let source: any = document.getElementById('vidsrc');
    // source!['src'] = this.video_url2;
    // let video = document.getElementById('singleVideo');
    // video?.remove();

    // let newVid = document.createElement('video');
    // newVid.id = "singleVideo";
    // let source = document.createElement('source');
    // source.src = this.video_url2;
    // source.type = "video/mp4";
    // videoCon?.appendChild(newVid);

    
  }

}

@NgModule({
  imports: [VgCoreModule, VgControlsModule, VgOverlayPlayModule, VgBufferingModule],
  exports:[VideoPlayerComponent],
  declarations: [VideoPlayerComponent]
})
export class VideoPlayerModule {
}
