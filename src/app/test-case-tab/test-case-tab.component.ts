import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-case-tab',
  templateUrl: './test-case-tab.component.html',
  styleUrls: ['./test-case-tab.component.scss']
})
export class TestCaseTabComponent {
  @Input() item_list: any = [
    {name: "Test Case 1", url: ""},
    {name: "Test Case 2", url: ""},
    {name: "Test Case 3", url: ""},
    {name: "Test Case 4", url: ""},
    {name: "Test Case 5", url: ""},
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
