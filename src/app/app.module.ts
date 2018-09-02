import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SearchComponent } from './search/search.component';

import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
