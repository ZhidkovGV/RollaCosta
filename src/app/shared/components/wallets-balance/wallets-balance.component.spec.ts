import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletsBalanceComponent } from './wallets-balance.component';

describe('WalletsBalanceComponent', () => {
  let component: WalletsBalanceComponent;
  let fixture: ComponentFixture<WalletsBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletsBalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletsBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
