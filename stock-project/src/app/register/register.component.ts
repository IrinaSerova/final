import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../app-user.service';
import { Router } from '@angular/router';
import { User } from '../user.interface';
import {FormControl, FormGroup} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
// public user: User;
  
  // constructor(public userService: AppUserService, 
  //             public router: Router) {
                
  //       user: User = {
  //           username: "",
  //           password: "",
  //           firstName: "",
  //           lastName: "",
  //           email: ""
  //                       }
  //       };
                
              

  // ngOnInit() {
  // }
  user:any =
{
    "username": '',
    "firstName":'',
    "lastName": '',
    "email": '',
    "password": ''
}

    resData:any={};
  userRegistration = new FormGroup({
    username: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')

  });  
  
 onSubmit() {
      this.user.firstName = this.userRegistration.controls["firstName"].value
      this.user.lastName = this.userRegistration.controls["lastName"].value
      this.user.email = this.userRegistration.controls["email"].value
      this.user.password = this.userRegistration.controls["password"].value
      console.log(this.user.firstName);

    }
     onRegister() {
    console.log(this.user);
    
    this.AppUserService.register(this.user)
    .subscribe((res) => {
      console.log(res);
      this.AppUserService.toHomePage(res)
        //   console.log(res);
        //     this.AppUserService.toHomePage(this.resData)
        //     {
        //         sessionStorage.setItem('token', res["token"])
        //         sessionStorage.setItem('userId', res["userId"])
        //     }
        // })
  }

  ngOnInit() {
  }


}
  // onRegister(user){
  //   this.user = new User(user);
  //   console.log(this.user);
   
  //   this.userService.register(this.user)
  //   .subscribe( (res) => {
  //     console.log(res);
  //     this.userService.toHomePage(res)
      
   
  //   })
    
//   }

// }
