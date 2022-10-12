import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: `
    <h2 class="custom">
      user-list works!
   </h2>
  `,
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
