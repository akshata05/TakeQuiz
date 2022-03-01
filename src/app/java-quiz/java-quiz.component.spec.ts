import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaQuizComponent } from './java-quiz.component';

describe('JavaQuizComponent', () => {
  let component: JavaQuizComponent;
  let fixture: ComponentFixture<JavaQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
