import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EventService } from '../services/event.service';
import { EventType } from '../models/eventType';
import { Rule } from '../models/rule';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-event-creator',
  templateUrl: './event-creator.component.html',
  styleUrls: ['./event-creator.component.css']
})
export class EventCreatorComponent implements OnInit {

  eventTypeForm = this._fb.group({
    displayValue: [''],
    startingValue: [''],
    endingValue: [''],
    rule1: this._fb.group({
      mutipleOfValue: [''],
      outputValue: [''],
    }),
    rule2: this._fb.group({
      mutipleOfValue: [''],
      outputValue: [''],
    })
  });

  constructor(private _fb: FormBuilder,
    private _eventService: EventService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }

  onSubmit() {
    let newEvent = new EventType(
      this.eventTypeForm.value['displayValue'],
      this.eventTypeForm.value['startingValue'],
      this.eventTypeForm.value['endingValue'],
      [
        new Rule(this.eventTypeForm.value['rule1']['mutipleOfValue'], this.eventTypeForm.value['rule1']['outputValue']),
        new Rule(this.eventTypeForm.value['rule2']['mutipleOfValue'], this.eventTypeForm.value['rule2']['outputValue'])
      ]
    )

    this._eventService.addEventType(newEvent);
    this.openSnackBar("New Event Type Added", "Created");
  }
}
