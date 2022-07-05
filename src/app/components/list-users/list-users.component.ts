import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users$ = of([{name: 'John'}, {name: 'Jane'}]);
  constructor() { }

  ngOnInit(): void {
  }

}
