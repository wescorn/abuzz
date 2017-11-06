import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTrioComponent } from './info-trio.component';

describe('InfoTrioComponent', () => {
  let component: InfoTrioComponent;
  let fixture: ComponentFixture<InfoTrioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTrioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
