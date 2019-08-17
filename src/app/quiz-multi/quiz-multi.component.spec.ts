import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizMultiComponent } from './quiz-multi.component';

describe('QuizMultiComponent', () => {
  let component: QuizMultiComponent;
  let fixture: ComponentFixture<QuizMultiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizMultiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
