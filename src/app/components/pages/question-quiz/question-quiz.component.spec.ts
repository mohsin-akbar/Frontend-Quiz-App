import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionQuizComponent } from './question-quiz.component';

describe('QuestionQuizComponent', () => {
  let component: QuestionQuizComponent;
  let fixture: ComponentFixture<QuestionQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionQuizComponent]
    });
    fixture = TestBed.createComponent(QuestionQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
