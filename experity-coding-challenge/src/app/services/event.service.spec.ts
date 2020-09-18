import { TestBed } from '@angular/core/testing';
import { EventType } from '../models/eventType';
import { Rule } from '../models/rule';

import { EventService } from './event.service';

describe('EventService', () => {
  let service: EventService;
  let testEventType = new EventType("Diagnose", 1, 100, [
    new Rule(2, "Diagnose"),
    new Rule(7, "Patient")]
  )

  beforeEach(() => {
    TestBed.configureTestingModule({
    });
    service = TestBed.inject(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('eventArray is created with default EventTypes', () => {
    expect(service._eventArray.length).toEqual(2);
  });

  it('can add EventType to EventTypeArray', () => {
    service.addEventType(testEventType);
    expect(service._eventArray.length).toEqual(3);
    expect(service._eventArray).toContain(testEventType);
  });

});
