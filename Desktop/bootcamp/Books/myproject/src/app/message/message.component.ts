import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(
    public senderid :  number,
    public receiverid : number,
    public bookid : number,
    public msg : string
  ) { }

  ngOnInit() {
  }

}
