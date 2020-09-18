import { Component, OnInit } from '@angular/core';
import { EventType } from '../models/eventType';
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

  uploadEventType(selectedEvent:EventType){
    this.eventService.post(selectedEvent);
  }

}
