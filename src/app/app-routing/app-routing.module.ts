import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { CurrentWeatherComponent } from '../current-weather/current-weather.component'
    import { AppComponent } from '../app.component'

    const routes: Routes = [
        {
            path: '',
            component: AppComponent,
        },
        {
          path: 'current-weather/:city',
          component: CurrentWeatherComponent,
      }
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }