import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuizesComponent } from './user-quizes.component';

describe('UserQuizesComponent', () => {
  let component: UserQuizesComponent;
  let fixture: ComponentFixture<UserQuizesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserQuizesComponent]
    });
    fixture = TestBed.createComponent(UserQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
