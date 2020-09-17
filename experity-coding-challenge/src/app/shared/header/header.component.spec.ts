import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // [TODO] Fix Test 
  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(HeaderComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   console.log(compiled);
  //   console.log(compiled.querySelector('h1'));
  //   expect(compiled.querySelector('div div h1').textContent).toEqual('Experity Code Challenge');
  // });
});
