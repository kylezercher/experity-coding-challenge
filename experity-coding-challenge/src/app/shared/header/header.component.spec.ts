import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { SharedModule } from '../shared.module';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let h1: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {declarations: [HeaderComponent],
        imports:[SharedModule],
      providers:[ {ComponentFixtureAutoDetect, useValue:true}]
      });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('no title in the DOM after createComponent()', () => {
    expect(h1.textContent).toEqual('');
  });

  it('should contain title', () => {
    component.headerText = "Experity Code Challenge";
    fixture.detectChanges();
    expect(h1.textContent).toContain(component.headerText);
  });
});