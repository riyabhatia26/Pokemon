import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { FormControl, FormGroup } from '@angular/forms';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-addlisting',
  templateUrl: './addlisting.component.html',
  styleUrls: ['./addlisting.component.css']
})
export class AddlistingComponent implements OnInit {

  // cndition = ['New', 'Almost New', 'Slight Damage', 'Worn'];
  
  listingModel = new BookComponent(null,null,null,null,null);

  submitted = false;
  errorMsg = '';

  
  constructor(private addbook : MyserviceService) { }
  ngOnInit() {
    // this.addbook.addBook(newBook)
    // .subscribe(book => 
    // {
    //  console.log(book);
    //   this.books.push(book)
    // });
    
  }
  angularForm = new FormGroup ({
    name: new FormControl()
  });


  onSubmit() {
    this.submitted = true;
    this.addbook.addBook(this.listingModel)
      .subscribe(
        response =>{ 
          console.log('Success!', response)
          console.log("Added " + this.listingModel)
        },
        error => {
          this.errorMsg = error.statusText
        }
      )
  }

}
