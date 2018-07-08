import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    public name : string,
    public email : string,
    public password : string,
    public college : string,
    public address : string,
    public contact : number
  ) { }

  ngOnInit() {
  }

}
