import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(
    public name : string,
    public author : string,
    public image : string,
    public price : number,
    public cndition : string
  ) { }

  ngOnInit() {
  }

}
