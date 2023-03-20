import { Component } from '@angular/core';
import { weatherService } from '../button-weather/button-weather.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  values = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
  // currentStartValue = this.weatherService.weather.value?.date === undefined ? this.values[0] : parseInt(this.weatherService.weather.value?.date.split(' ')[1].split(':')[0]);
  // currentStartValue = this.values[0];
  currentStartValue = this.weatherService.weather.value.timeHours;


  constructor(public weatherService: weatherService) { 
    console.log(this.weatherService.weather.value?.date);
    // this.currentStartValue = this.weatherService.weather.value?.date === undefined ? this.values[0] : parseInt(this.weatherService.weather.value?.date.split(' ')[1].split(':')[0]);
  
  }

  onClickPrev() {
    if (this.weatherService.weather.value.timeHours !== this.values[0]) {
      this.currentStartValue -= 6;
      this.weatherService.weather.value.timeHours -= 6;
      if (this.weatherService.weather.value.timeHours < 1) {
        this.currentStartValue = 0;
        this.weatherService.weather.value.timeHours = 0;
      } 
    }
    console.log(this.currentStartValue)
    console.log(Number(this.weatherService.weather.value?.date.split(' ')[1].split(':')[0]))

  }

  onClickNext() {
    this.currentStartValue += 6;
    this.weatherService.weather.value.timeHours += 6;
    if (this.weatherService.weather.value.timeHours + 5 > this.values[this.values.length-1]) {
      this.currentStartValue = this.values[this.values.length-6]
      this.weatherService.weather.value.timeHours = this.values[this.values.length-6]
    }
    // console.log(this.currentStartValue)
    console.log(this.weatherService.weather.value.timeHours);
  }

}
