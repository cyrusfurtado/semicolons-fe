import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notes-tab',
  templateUrl: './notes-tab.component.html',
  styleUrls: ['./notes-tab.component.scss']
})
export class NotesTabComponent {
  @Input() item_list: any = [
    {name: "Sprint 1", url: ""},
    {name: "Sprint 2", url: ""},
    {name: "Sprint 3", url: ""},
    {name: "Sprint 4", url: ""},
    {name: "Sprint 5", url: ""},
  ]
}
