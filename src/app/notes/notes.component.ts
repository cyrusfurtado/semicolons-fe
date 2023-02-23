import { NgModule, Component } from '@angular/core';
import { StepperModule } from '../stepper/stepper.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

}

@NgModule({
  declarations: [NotesComponent],
  imports: [StepperModule]
})
export class NotesModule {}
