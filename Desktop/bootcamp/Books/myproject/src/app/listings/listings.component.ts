import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ItemComponent } from '../item/item.component';
import { MyserviceService } from '../myservice.service';
import { WishComponent } from '../wish/wish.component';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  public selectedId;

  public listing;
    // {"id":1, "name":"item1"},
    // {"id":2, "name":"item2"},
    // {"id":3, "name":"item3"}
  
  public filterCond='';

  wishModel = new WishComponent(null,null);

  constructor(private router : Router, private route : ActivatedRoute, private list : MyserviceService) { }

  ngOnInit() {

    this.list.getlistings()
      .subscribe(data => {
        this.listing = Object.values(data)

         console.log(this.listing)

        // console.log("Angular listings " + typeof this.listing);
        // console.log("data rec" + typeof data);
        // console.log(this.listing.values);

      //   var myData = Object.keys(data).map(key => {
      //     console.log("myData" + typeof myData);
      //     return data[key];          
      // })


      });

      

    this.route.paramMap.subscribe(( params : ParamMap ) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    })
  }
  
  onSelect(item){
    this.list.idVal(item.id);
    // this.router.navigate(['/listings',item.id]);
    this.router.navigate([item.id], {relativeTo: this.route});
  }

  isSelected(item){
    return item.id === this.selectedId; 
  }

  addinwishlist(item){
//    this.list.getwish(item.id);
    this.wishModel.bookid = item.id;
    this.list.addtowishlist(this.wishModel)
      .subscribe(
        response => {
          console.log('Success!', response)
          console.log("Wish Added "+ this.wishModel)
        }
      );

  }


}
