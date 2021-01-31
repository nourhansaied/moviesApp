import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  data;
  constructor(
    // user: UsersService
  ) { 
    // let user = new UsersService('asdasd');
    this.data = []

  }

  ngOnInit(): void {
  }

}
