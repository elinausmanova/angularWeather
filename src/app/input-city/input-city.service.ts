import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class cityService {

 private city = new BehaviorSubject('');
 currentCity = this.city.asObservable();

 constructor() { }
 
 updateCity(city: string) {
 this.city.next(city)
 }
}