import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosOverviewPageComponent } from './todos-overview-page.component';

describe('TodosOverviewComponent', () => {
  let component: TodosOverviewPageComponent;
  let fixture: ComponentFixture<TodosOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosOverviewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosOverviewPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
