import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { EventSubmitterComponent } from './event-submitter.component';

describe('EventSubmitterComponent', () => {
  let component: EventSubmitterComponent;
  let fixture: ComponentFixture<EventSubmitterComponent>;
  let matSelect:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventSubmitterComponent],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ],
      imports: [HttpClientTestingModule,SharedModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSubmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    matSelect = fixture.debugElement.query(By.css('.mat-select-trigger')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('eventTypeSelection is created with default values'), () => {
    fixture.detectChanges();
    expect(component.eventSelection.length).toEqual(2);
  }

  it('component variables are initialized'), () => {
    fixture.detectChanges();
    expect(component.numberArray).toBeDefined();
    expect(component.selectedEvent).toBeDefined();
    expect(component.eventSelection).toBeDefined();
  }

  // [TODO] Fix Test
  // it('select box should have values'),() => {
  //   matSelect.click();
  //   fixture.detectChanges();
  //   const matOption = fixture.debugElement.query(By.css('mat-option')).nativeElement;
  //   matOption.click();
  //   fixture.detectChanges();
  //   fixture.whenStable().then( () => {
  //     const inputElement:HTMLElement = fixture.debugElement.query(By.css('mat-option-6')).nativeElement
  //     expect(inputElement.innerHTML.length).toBeGreaterThan(2);
  //   })
  // }

});
