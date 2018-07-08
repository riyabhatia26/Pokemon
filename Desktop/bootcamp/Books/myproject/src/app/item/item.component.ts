import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { WishComponent } from '../wish/wish.component';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public itemId;
  public detail;
  public viewSeller=false;
  public input;

  wishModel = new WishComponent(null,null);
  msgModel = new MessageComponent(null,null,null,null);

  constructor(private route : ActivatedRoute, private router : Router, private detailservice : MyserviceService) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.itemId = id;
    this.route.paramMap.subscribe(( params : ParamMap ) => {
      let id = parseInt(params.get('id'));
      this.itemId = id;
      this.detailservice.idVal(id);
    })
    this.detailservice.getdetail()
    .subscribe(data => {
      this.detail=Object.values(data)

//      console.log("detailservice");

    });
  }

  goBack(){
    let selectedId = this.itemId ? this.itemId : null ;
//    this.router.navigate(['/listings', {id : selectedId}])
    this.router.navigate(['../', {id : selectedId}], {relativeTo: this.route});
  }

  // goPrev(){
  //   let prevId = this.itemId-1;
  //   this.router.navigate(['/listings', prevId]);
  // }

  // goNext(){
  //   let nextId = this.itemId+1;
  //   this.router.navigate(['/listings', nextId]);
  // }

  // showOvv(){
  //   this.router.navigate(['detail'], {relativeTo: this.route})
  // }

  showCnt(){
    this.viewSeller = true;
    // this.router.navigate(['contact'], {relativeTo: this.route})
  }

  
  addinwishlist(item){
    //    this.list.getwish(item.id);
        this.wishModel.bookid = item.id;
        this.detailservice.addtowishlist(this.wishModel)
          .subscribe(
            response => {
              console.log('Success!', response)
              console.log("Wish Added "+ this.wishModel)
            }
          );
    
      }


      msg(item){
        this.msgModel.receiverid=item.id;
        this.msgModel.bookid=item.bookid;
        this.msgModel.msg=this.input;
        
        this.detailservice.message(this.msgModel)
          .subscribe(
            response => {
              console.log('Success!', response)
              console.log("Msg Sent "+ this.msgModel)
            }
          )
        this.input=null;
      }
    


}
