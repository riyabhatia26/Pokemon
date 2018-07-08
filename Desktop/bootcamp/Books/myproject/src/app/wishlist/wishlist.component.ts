import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { log } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  public wishlist=[];
  public try;

  constructor(private router : Router, private list : MyserviceService) { }

  ngOnInit() {
    this.list.getwishlist()
    .subscribe(data => {
      
      this.wishlist = Object.values(data)
      console.log(this.wishlist);

      this.try = JSON.stringify(data)
      this.wishlist = JSON.parse(this.try)
      console.log(this.wishlist)
    })
  }

  onSelect(item){
    this.router.navigate(['/listings/' + item.id]);
  }


}
