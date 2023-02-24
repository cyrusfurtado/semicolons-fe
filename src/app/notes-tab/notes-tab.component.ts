import { Component, Input } from '@angular/core';
import { TranferDataToViewService } from '../shared/tranfer-data-to-view.service';

@Component({
  selector: 'app-notes-tab',
  templateUrl: './notes-tab.component.html',
  styleUrls: ['./notes-tab.component.scss']
})
export class NotesTabComponent {
  @Input() item_list: any = [
    {name: "Sprint 1", text: "{   'alternative': [   {   'confidence': 0.87254792,\
                              'transcript': 'finding the unique wnspsc that is '\
                                            'for the corrected category and the '\
                                            'Sailor category second point number '\
                                            'of data points per unit when xpsc it '\
                                            'is available and missing data '\
                                            'points'},\
                          {   'transcript': 'finding the unique wnspsc that is '\
                                            'for the corrected category and the '\
                                            'Sailor category second point number '\
                                            'of data points for unique when xpsc '\
                                            'it is available and missing data '\
                                            'points'},\
                          {   'transcript': 'finding the unique wnspsc that is '\
                                            'for the corrected category and the '\
                                            'seller category second point number '\
                                            'of data points per unit when xpsc it '\
                                            'is available and missing data '\
                                            'points'},\
                          {   'transcript': 'finding the unique wnspsc that is '\
                                            'for the corrected category and the '\
                                            'Sailor category second point number '\
                                            'of data points per unit when xpsc it '\
                                            'is available and missing data point'},\
                          {   'transcript': 'finding the unique wnspsc that is '\
                                            'for the corrected category and the '\
                                            'Sailor category second point number '\
                                            'of data points for unique when xpsc '\
                                            'it is available and missing data '\
                                            'point'}],\
       'final': True}\
   Did you say  finding the unique wnspsc that is for the corrected category and the sailor category second point number of data points per unit when xpsc it\
   is available and missing data points\
   result2:\
   []\
   unknown error occurred\
   result2:"},
    {name: "Sprint 2", text: "this is dummy text"},
    {name: "Sprint 3", text: "another dummy sentence"},
    {name: "Sprint 4", text: "demo assist rocks"},
    {name: "Sprint 5", text: "thankss for reading"},
  ]

  constructor(private tranfer: TranferDataToViewService) {}

  preview(index: number = -1)
  {
    if(index == -1) return;

    // console.log("Inside preview, index = ",index);

    // call transfer-url service with index parameter item text
    // to show the text in notes-view component
    this.tranfer.setDataToShow(this.item_list[index]['text']);
    // this.tranfer.getDataToShow();
  }
}
