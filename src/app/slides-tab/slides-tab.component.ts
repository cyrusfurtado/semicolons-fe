import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slides-tab',
  templateUrl: './slides-tab.component.html',
  styleUrls: ['./slides-tab.component.scss']
})
export class SlidesTabComponent {
  @Input() item_list: any = [
    {name: "Slide 1", url: ""},
    {name: "Slide 2", url: ""},
    {name: "Slide 3", url: ""},
    {name: "Slide 4", url: ""},
    {name: "Slide 5", url: ""},
  ]
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
