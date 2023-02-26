import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryItemDetailsComponent } from './history-item-details.component';

describe('HistoryItemDetailsComponent', () => {
  let component: HistoryItemDetailsComponent;
  let fixture: ComponentFixture<HistoryItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryItemDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
