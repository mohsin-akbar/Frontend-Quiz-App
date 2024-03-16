import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuestionAdminComponent } from './view-question-admin.component';

describe('ViewQuestionAdminComponent', () => {
  let component: ViewQuestionAdminComponent;
  let fixture: ComponentFixture<ViewQuestionAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewQuestionAdminComponent]
    });
    fixture = TestBed.createComponent(ViewQuestionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
