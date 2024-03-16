import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalDashbordComponent } from './normal-dashbord.component';

describe('NormalDashbordComponent', () => {
  let component: NormalDashbordComponent;
  let fixture: ComponentFixture<NormalDashbordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalDashbordComponent]
    });
    fixture = TestBed.createComponent(NormalDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
