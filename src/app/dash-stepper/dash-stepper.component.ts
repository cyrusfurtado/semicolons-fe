// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dash-stepper',
//   templateUrl: './dash-stepper.component.html',
//   styleUrls: ['./dash-stepper.component.scss']
// })
// export class DashStepperComponent {

// }


import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VideoComponent } from '../video/video.component';
import { ReactiveFormsModule } from '@angular/forms';


interface Voice_Actor {
  value: string;
  viewValue: string;
}

/**
 * @title Stepper overview
 */
@Component({
  selector: 'app-dash-stepper',
  templateUrl: './dash-stepper.component.html',
  styleUrls: ['./dash-stepper.component.scss']
})
export class DashStepperComponent {

  
  @ViewChild('servermsg1') s_msg1!:ElementRef;
  @ViewChild('servermsg2') s_msg2!:ElementRef;
  // @ViewChild('select1') select!:ElementRef;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  pname: string = "";
  hide_spinner1: boolean = true;
  hide_spinner2: boolean = true;
  hide_spinner3: boolean = true;
  hide_video: boolean = true;
  video_url = "";
  select_value?:string;
  value1 = "../../assets/video/fridayoutput.mp4";
  audio_hide = true;
  gen_trans : string = "";


  voices: Voice_Actor[] = [
    { value: 'Siddesh', viewValue: 'Siddesh' },
    { value: 'Sailee', viewValue: 'Sailee' },
  ];

  constructor(private _formBuilder: FormBuilder, private router: Router) { 
    // this.s_msg1.nativeElement.value = "Analyzing";
  }

  showAudio()
  {
    this.audio_hide = false;
  }

  slide() {
    console.log('Generate slide btn');
    // let nameNotSet = this.test();
    // if(nameNotSet){return;}
    this.showSpinner1(2);
    setTimeout(() => this.hideSpinner1(2), 5000);
  }

  // test() {
  //   if (this.pname == "") {
  //     alert("Enter project name");
  //     return true;
  //   }
  //   else {
  //     console.log('submitted');
  //     return false;
  //   }
  // }

  updateValue(value: string)
  {
    this.select_value = value;
    console.log(value);
  }

  demo() {
    if(this.select_value == 'Siddesh'){
      this.value1 = "../../assets/video/fridayoutput.mp4";
    } else {
      this.value1 = "../../assets/video/satoutput.mp4";
      document.getElementById('vidsrc')?.remove();
      const node = document.createElement('source');
      node.src = "../../assets/video/satoutput.mp4";
      document.getElementById('singleVideo')?.appendChild(node);
    }

    console.log(this.select_value);
    this.showSpinner1(3);
    setTimeout(()=> this.changeDemoServerMsg(1), 3000);
    setTimeout(()=> this.changeDemoServerMsg(2), 8000);
    setTimeout(()=> this.hideSpinner1(3), 11000);
    setTimeout(()=> {this.hide_video = false;}, 13000);
    // this.router.navigate(['videos']);
  }

  ngAfterViewInit()
  {
    // let update = function(i: number) {
    //   this.changeSlideServerMsg(i);
    // }
  }

  changeDemoServerMsg(i: number)
  {
    if(i == 1) {
      this.s_msg2.nativeElement.textContent =  "Analyzing Data...";
    }
    if(i == 2) {
      this.s_msg2.nativeElement.textContent =  "Generating Demo...";
      // document.getElementById('server-msg2')?.innerText = "Generating Data";
    }
  }

  showSpinner1(i: number) {
    if (i == 1) {
      this.hide_spinner1 = false;
      // document.getElementById('gen-trans')?.innerText= "test";
      setTimeout(() => {this.hideSpinner1(1); console.log("test"); this.gen_trans = "Hi this is alston, as a project manager I will be managing thise team. Siddesh started working on developing APIS for file-upload feature, JIRA-ticket:1401. Siyashree is working oc creating the cypress test cases for owncloud, JIRA-ticket:1402. She is has completed the test cases for the login page and Dashboard and other feature test cases are pending. Diraj is creating UI components for owncloud. He has completed the login component,, JIRA-ticket:1403 and other components are pending. Dhirender is working on mongoDB api to create, delete, update and fetch users from the mongoDb database, JIRA-ticket:1404."}, 5000);
    }
    else if (i == 2) {
      this.hide_spinner2 = false;
      setTimeout(() => this.hideSpinner1(2), 5000);
    }
    else if (i == 3) {
      this.hide_spinner3 = false;
      setTimeout(() => this.hideSpinner1(2), 5000);
    }
  }

  hideSpinner1(i: number) {
    if (i == 1) {
      this.hide_spinner1 = true;
      return;
    }
    else if (i == 2) {
      this.hide_spinner2 = true;
      this.router.navigateByUrl('slides');
      return;
    }
    else if (i == 3) {
      this.hide_spinner3 = true;
      // this.router.navigate(['videos']);
    }
  }
}


// @NgModule({
//   imports: [],
//   exports: [],
//   declarations: []
// })
// export class SlideModule {}