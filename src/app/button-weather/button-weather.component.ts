import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cityService } from '../input-city/input-city.service';
import { weatherService } from './button-weather.service';

@Component({
  selector: 'app-button-weather',
  templateUrl: './button-weather.component.html',
  styleUrls: ['./button-weather.component.css']
})
export class ButtonWeatherComponent {

  @Input() key: string | undefined;
  city = ''

  constructor(private cityService: cityService, private http: HttpClient, private weatherService: weatherService) { }
  ngOnInit() {
    this.cityService.currentCity.subscribe((value) => {
      this.city = value;
    });
  }

  onClick() {
    let link = `http://api.weatherapi.com/v1/forecast.json?key=${this.key}&q=${this.city}&days=1&aqi=no&alerts=no`;
    this.http
      .get(link)
      .subscribe((data: any) => {
        console.log(data);
        this.weatherService.updateWeather(
          {
            location: data.location.name + ', ' + data.location.country,
            date: data.current.last_updated.split(' ')[0],
            timeHours: Number(data.current.last_updated.split(' ')[1].split(':')[0]),
            temp: data.current.temp_c + '\u00B0C',
            feelslike: data.current.feelslike_c + '\u00B0C',
            condition: data.current.condition.text,
            img: data.current.condition.icon,
          }
        )
        this.weatherService.updateDayWeather(
          {
            date: data.forecast.forecastday[0].date,
            average: data.forecast.forecastday[0].day.avgtemp_c + '\u00B0C',
            max: data.forecast.forecastday[0].day.maxtemp_c + '\u00B0C',
            min: data.forecast.forecastday[0].day.mintemp_c + '\u00B0C',
            condition: data.forecast.forecastday[0].day.condition.text,
          }
        )
        this.weatherService.updateHourWeather(
          data.forecast.forecastday[0].hour.map((element: any) => {
            return (
              {
                temp: element.temp_c + '\u00B0C',
                icon: element.condition.icon,
              }
            )
          })
        )

      },
        // The 2nd callback handles errors.
        (err) => console.error(err),
        // The 3rd callback handles the "complete" event.
        () => {
          console.log(this.weatherService.currentWeather)
          console.log(this.weatherService.dayWeather.value)
          console.log(this.weatherService.weather.value?.date)
        })


  }

}
