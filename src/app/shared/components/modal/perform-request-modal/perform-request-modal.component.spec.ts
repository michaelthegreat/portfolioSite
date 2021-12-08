import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformRequestModalComponent } from './perform-request-modal.component';

describe('PerformRequestModalComponent', () => {
  let component: PerformRequestModalComponent;
  let fixture: ComponentFixture<PerformRequestModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformRequestModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformRequestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
