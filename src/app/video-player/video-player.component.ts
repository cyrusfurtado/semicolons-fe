import { Component, NgModule } from '@angular/core';

import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {
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


}

@NgModule({
  imports: [VgCoreModule, VgControlsModule, VgOverlayPlayModule, VgBufferingModule],
  exports:[VideoPlayerComponent],
  declarations: [VideoPlayerComponent]
})
export class VideoPlayerModule {
}
