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


  voices: Voice_Actor[] = [
    { value: 'Siddesh', viewValue: 'Siddesh' },
    { value: 'Sailee', viewValue: 'Sailee' },
  ];

  constructor(private _formBuilder: FormBuilder, private router: Router) { 
    // this.s_msg1.nativeElement.value = "Analyzing";
  }

  slide() {
    console.log('Generate slide btn');
    let nameNotSet = this.test();
    if(nameNotSet){return;}
    this.showSpinner1(2);
    setTimeout(() => this.hideSpinner1(2), 5000);
  }

  test() {
    if (this.pname == "") {
      alert("Enter project name");
      return true;
    }
    else {
      console.log('submitted');
      return false;
    }
  }

  demo() {
    this.showSpinner1(3);
    setTimeout(()=> this.changeDemoServerMsg(1), 3000);
    setTimeout(()=> this.changeDemoServerMsg(2), 8000);
    setTimeout(()=> this.hideSpinner1(3), 11000);
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
      setTimeout(() => this.hideSpinner1(1), 5000);
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
      this.router.navigate(['slides']);
    }
    else if (i == 3) {
      this.hide_spinner3 = true;
      this.router.navigate(['videos']);
    }
  }
}
