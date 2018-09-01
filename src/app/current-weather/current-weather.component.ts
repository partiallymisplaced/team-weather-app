import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather

  constructor() {
    this.current = {
      city: 'Seattle',
      country: 'USA',
      date: new Date(),
      image: "wi wi-day-cloudy",
      temperature: 72,
      description: 'Cloudy',
    }
   }

  ngOnInit() {
  }

}
