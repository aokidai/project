import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerodetaillComponent } from './herodetaill.component';

describe('HerodetaillComponent', () => {
  let component: HerodetaillComponent;
  let fixture: ComponentFixture<HerodetaillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerodetaillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerodetaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
