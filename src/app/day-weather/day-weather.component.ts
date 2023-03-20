import { Component } from '@angular/core';
import { weatherService } from '../button-weather/button-weather.service';

@Component({
  selector: 'app-day-weather',
  templateUrl: './day-weather.component.html',
  styleUrls: ['./day-weather.component.css']
})
export class DayWeatherComponent {

  constructor(public weatherService: weatherService) { }

}
