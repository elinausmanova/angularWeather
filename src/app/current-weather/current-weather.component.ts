import { Component } from '@angular/core';
import { weatherService } from '../button-weather/button-weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {

  constructor(public weatherService: weatherService) { }

}
