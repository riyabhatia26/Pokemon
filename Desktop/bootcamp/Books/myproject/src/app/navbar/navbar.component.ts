import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
//import { AbstractControl, FormGroup, Validators, FormControl } from ‘@angular/forms’;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private serv : MyserviceService) { }

  ngOnInit() {
  }

  clear(){
    this.serv.clearuid();
  }

}
