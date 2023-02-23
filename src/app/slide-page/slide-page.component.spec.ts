import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePageComponent } from './slide-page.component';

describe('SlidePageComponent', () => {
  let component: SlidePageComponent;
  let fixture: ComponentFixture<SlidePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
