import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EventType } from '../models/eventType';
import { Rule } from '../models/rule';

const defaultEvent1 = new EventType("Register", 1, 100, [
  new Rule(3, "Register"),
  new Rule(5, "Patient")]
)
const defaultEvent2 = new EventType("Diagnose", 1, 100, [
  new Rule(2, "Diagnose"),
  new Rule(7, "Patient")]
)


@Injectable({
  providedIn: 'root'
})
export class EventService {
  _eventArray: Array<EventType>
  url = environment.baseUrl
  headers:object

  constructor(private http:HttpClient) {
    this.headers = {
      "Content-Type":'application/json'
    }
    this._eventArray = [];
    this.addEventType(defaultEvent1);
    this.addEventType(defaultEvent2);
  }

  get eventArray() {
    return this._eventArray
  }

  set eventArray(newArray) {
    this._eventArray = newArray
  }

  addEventType(newEvent: EventType) {
    this._eventArray.push(newEvent);
  }

  post(event:EventType){
    this.http.post(this.url, JSON.stringify(event), this.headers).subscribe(
      data => {console.log(data)},
      err => {
        alert(`Error. \nMessage: ${err.message}`)
      }
    )
  }
}
