import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowQuizByCategoryComponent } from './show-quiz-by-category.component';

describe('ShowQuizByCategoryComponent', () => {
  let component: ShowQuizByCategoryComponent;
  let fixture: ComponentFixture<ShowQuizByCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowQuizByCategoryComponent]
    });
    fixture = TestBed.createComponent(ShowQuizByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
