import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalProfileComponent } from './normal-profile.component';

describe('NormalProfileComponent', () => {
  let component: NormalProfileComponent;
  let fixture: ComponentFixture<NormalProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalProfileComponent]
    });
    fixture = TestBed.createComponent(NormalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
