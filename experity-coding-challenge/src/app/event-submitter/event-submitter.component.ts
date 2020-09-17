import { Component, OnInit } from '@angular/core';
import { IEventType, EventType } from '../models/event';
import { Rule } from '../models/rule';

const defaultEvent1 = new EventType("Register", 1, 100, [
  new Rule(3, "Register"),
  new Rule(5, "Patient")]
)
const defaultEvent2 = new EventType("Diagnose", 1, 100, [
  new Rule(2, "Diagnose"),
  new Rule(7, "Patient")]
)


@Component({
  selector: 'app-event-submitter',
  templateUrl: './event-submitter.component.html',
  styleUrls: ['./event-submitter.component.css']
})

export class EventSubmitterComponent implements OnInit {
  numberArray: Array<string>;
  selectedEvent: EventType;
  eventSelection:Array<EventType>;

  constructor() {
    this.eventSelection = [];
    this.eventSelection.push(defaultEvent1, defaultEvent2);
  }

  ngOnInit(): void {
  }

}
