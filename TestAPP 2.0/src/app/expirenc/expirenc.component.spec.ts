import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpirencComponent } from './expirenc.component';

describe('ExpirencComponent', () => {
  let component: ExpirencComponent;
  let fixture: ComponentFixture<ExpirencComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpirencComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpirencComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
