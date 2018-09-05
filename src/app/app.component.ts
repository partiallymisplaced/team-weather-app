import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
   applyNightBackground() {
    const currentHour = new Date().getHours();
    
    let background = document.querySelector('body');
      if (currentHour <= 7 || currentHour >= 20) {
        background.classList.add('night-color');
      }  
  }

  ngOnInit() {
    this.applyNightBackground();
  }
}
