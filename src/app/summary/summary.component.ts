import { NgModule, Component } from '@angular/core';
import { StepperModule } from '../stepper/stepper.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {

}

@NgModule({
  declarations: [SummaryComponent],
  imports: [StepperModule]
})
export class SummaryModuel {}
