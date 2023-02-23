import { Component } from '@angular/core';

@Component({
  selector: 'app-slides-tab',
  templateUrl: './slides-tab.component.html',
  styleUrls: ['./slides-tab.component.scss']
})
export class SlidesTabComponent {
  // test(num?: number)
  // {
  //   console.log("test", num);
  // }

  download(url?: string)
  {
    console.log("Download -> ", url);
  }

  preview(url?: string)
  {
    console.log("Preview -> ", url);
  }
}
