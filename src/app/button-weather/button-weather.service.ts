import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface weatherObject {
    location: string,
    date: string,
    timeHours: number,
    temp: string,
    feelslike: string,
    condition: string,
    img: string,
}

interface dayWeatherObject {
    date: string,
    average: string,
    max: string,
    min: string,
    condition: string,
}

@Injectable({
    providedIn: 'root'
})
export class weatherService {

    // public weather = new BehaviorSubject<weatherObject | null>(null);
    public weather = new BehaviorSubject<weatherObject>
        ({
            location: '',
            date: '',
            timeHours: 0,
            temp: '',
            feelslike: '',
            condition: '',
            img: '',
        });
    currentWeather = this.weather.asObservable();

    public dayWeather = new BehaviorSubject<dayWeatherObject | null>(null);
    //  currentDayWeather = this.dayWeather.asObservable();

    public hourWeather = new BehaviorSubject<any[] | null>(null);

    constructor() { }

    updateWeather(weather: any) {
        this.weather.next(weather)
    }

    updateDayWeather(dayWeather: any) {
        this.dayWeather.next(dayWeather)
    }

    updateHourWeather(hourWeather: []) {
        this.hourWeather.next(hourWeather)
    }
}