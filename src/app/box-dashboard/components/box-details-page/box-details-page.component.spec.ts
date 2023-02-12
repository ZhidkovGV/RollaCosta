import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxDetailsPageComponent } from './box-details-page.component';

describe('BoxDetailsPageComponent', () => {
  let component: BoxDetailsPageComponent;
  let fixture: ComponentFixture<BoxDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
