import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBunnyComponent } from './find-bunny.component';

describe('FindBunnyComponent', () => {
  let component: FindBunnyComponent;
  let fixture: ComponentFixture<FindBunnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindBunnyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindBunnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
