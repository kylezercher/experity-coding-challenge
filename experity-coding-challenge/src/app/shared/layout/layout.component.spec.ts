import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../shared.module';

import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  let submitEventTypeLink:HTMLElement;
  let createEventTypeLink:HTMLElement;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutComponent ],
      providers:[{ComponentFixtureAutoDetect, useValue:true}],
      imports:[SharedModule, RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    submitEventTypeLink = fixture.debugElement.nativeElement.querySelector('#submitEventTypeId')
    createEventTypeLink = fixture.debugElement.nativeElement.querySelector('#createEventTypeId')
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submitEventType link is created', () => {
    expect(submitEventTypeLink).toBeTruthy();
  });

  it('createEventType link is created', () => {
    expect(submitEventTypeLink).toBeTruthy();
  });


});
