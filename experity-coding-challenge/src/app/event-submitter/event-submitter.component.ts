import { Component, OnInit } from '@angular/core';
import { IEventType, EventType } from '../models/eventType';
import { Rule } from '../models/rule';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-submitter',
  templateUrl: './event-submitter.component.html',
  styleUrls: ['./event-submitter.component.css']
})

export class EventSubmitterComponent implements OnInit {
  numberArray: Array<string>;
  selectedEvent: EventType;
  eventSelection: Array<EventType>;

  constructor(private eventService: EventService) {
    this.eventSelection = this.eventService.eventArray
  }

  ngOnInit(): void {
  }

  uploadEventType(selectedEvent){
    this.eventService.post(selectedEvent);
  }

}
