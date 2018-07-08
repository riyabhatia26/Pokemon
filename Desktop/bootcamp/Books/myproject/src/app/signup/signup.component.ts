import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersComponent } from '../users/users.component';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  userModel = new UsersComponent(null,null,null,null,null,null);

  submitted = false;
  errorMsg = '';

  constructor(private router: Router, private adder : MyserviceService) { }

  ngOnInit() {
  }
  angularForm = new FormGroup ({
    name: new FormControl()
  });


  onSubmit() {
    this.submitted = true;
    this.adder.create(this.userModel)
      .subscribe(
        response => {
          console.log('Success!', response)
          console.log("Added "+ this.userModel)
        },
        error => {
          this.errorMsg = error.statusText
        }
      )
      this.router.navigate(['/home']);
  }


}
