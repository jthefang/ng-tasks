import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearCompletedTasksComponent } from './clear-completed-tasks.component';

describe('ClearCompletedTasksComponent', () => {
  let component: ClearCompletedTasksComponent;
  let fixture: ComponentFixture<ClearCompletedTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearCompletedTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearCompletedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
