import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputCityComponent } from './input-city/input-city.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ButtonWeatherComponent } from './button-weather/button-weather.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { DayWeatherComponent } from './day-weather/day-weather.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    InputCityComponent,
    ButtonWeatherComponent,
    CurrentWeatherComponent,
    DayWeatherComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
