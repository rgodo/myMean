import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgcomponentComponent } from './rgcomponent.component';

describe('RgcomponentComponent', () => {
  let component: RgcomponentComponent;
  let fixture: ComponentFixture<RgcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
