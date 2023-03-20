import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cityService } from './input-city.service';

@Component({
  selector: 'app-input-city',
  templateUrl: './input-city.component.html',
  styleUrls: ['./input-city.component.css']
})
export class InputCityComponent {

  city = '';
  key = '74775f3391e74b808c7132138232402';

  constructor(private cityService: cityService) {}

  onKey(event: any) {
    this.city = event.target.value;
    this.cityService.updateCity(this.city)
  }
}
