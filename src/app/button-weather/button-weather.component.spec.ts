import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWeatherComponent } from './button-weather.component';

describe('ButtonWeatherComponent', () => {
  let component: ButtonWeatherComponent;
  let fixture: ComponentFixture<ButtonWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
