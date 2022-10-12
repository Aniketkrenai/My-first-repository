import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  template: `
    <h2 class="custom">
      country-list works!
</h2>
  `,
  styles: [
    '.custom{color:pink}'
  ]
})
export class CountryListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
