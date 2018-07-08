import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
//import { UsersComponent } from '../users/users.component';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginModel = new LoginComponent(null,null);
  // userModel = new UsersComponent('','',0);
  public userdetails;
  loginForm: FormGroup;

  constructor(private fetchuser : MyserviceService, private router: Router) { }

  ngOnInit() {
    }
  angularForm = new FormGroup ({
    name: new FormControl()
  });

  onSubmit(){

    // console.log("login submit")
    
    // console.log(this.loginModel.email);
    // console.log(this.loginModel.password);

    this.fetchuser.loginhelp(this.loginModel.email, this.loginModel.password);
    this.router.navigate(['/listings']);
    this.fetchuser.fetchuser()
    .subscribe(data => {
      this.userdetails=Object.values(data)
//      console.log("fetchuserservice");
        // console.log(typeof this.userdetails)
        // console.log(this.userdetails[0].id)
    });  
    this.fetchuser.useridVal(this.userdetails[0].id);

    

  }

}
