import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {

  public mylist;

  constructor(private getmy : MyserviceService) { }

  ngOnInit() {
    this.getmy.mylisting()
      .subscribe(data => {
        this.mylist = Object.values(data)
        console.log(this.mylist)
      });
  }

}
