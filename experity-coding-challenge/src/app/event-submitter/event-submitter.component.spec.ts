import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSubmitterComponent } from './event-submitter.component';

describe('EventSubmitterComponent', () => {
  let component: EventSubmitterComponent;
  let fixture: ComponentFixture<EventSubmitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventSubmitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSubmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
