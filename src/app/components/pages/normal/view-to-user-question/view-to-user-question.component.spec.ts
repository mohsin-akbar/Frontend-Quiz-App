import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewToUserQuestionComponent } from './view-to-user-question.component';

describe('ViewToUserQuestionComponent', () => {
  let component: ViewToUserQuestionComponent;
  let fixture: ComponentFixture<ViewToUserQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewToUserQuestionComponent]
    });
    fixture = TestBed.createComponent(ViewToUserQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
