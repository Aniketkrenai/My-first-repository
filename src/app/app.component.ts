import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter with angular';
  data='Import Event in Angular';
  getData(val:string)
  {
    console.warn("function called")
  }
 
  
 
}
