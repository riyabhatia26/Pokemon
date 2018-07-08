import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  public sentmessages;
  public recmessages;

  constructor(private serv : MyserviceService) { }

  ngOnInit() {

  // sent(){
    
    this.serv.mysentmsgs()
      .subscribe(data =>{
        this.sentmessages = Object.values(data)
        console.log(this.sentmessages);
      }
      );
  //}

  //rec(){
    
    this.serv.myrecmsgs()
      .subscribe(data =>{
        this.recmessages = Object.values(data)
        console.log(this.recmessages);
      }
      );
  //}

  }

}
