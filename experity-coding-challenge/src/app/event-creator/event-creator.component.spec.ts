import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../shared/shared.module';

import { EventCreatorComponent } from './event-creator.component';

describe('EventCreatorComponent', () => {
  let component: EventCreatorComponent;
  let fixture: ComponentFixture<EventCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventCreatorComponent],
      imports: [SharedModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
