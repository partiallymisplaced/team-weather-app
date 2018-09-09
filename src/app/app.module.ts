import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { SearchComponent } from './search/search.component';

import { WeatherService } from './weather/weather.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CurrentWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
