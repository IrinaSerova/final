import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({providedIn: 'root'})
// export class User {
//   firstName: string;
//   lastName: string;
//   email: string;
//   username: string;
 
// }

export class AppUserService {
  url: string = "http://mean-stack-charlie-2018-irina-phortonssf.c9users.io:8080/api/appUsers";
  returnUrl: string = "home";

  
  constructor( private http : HttpClient, private router : Router) { }
         register(user){
            return this.http.post( this.url, user)
        }
        
        login(data) {
            return this.http.post( this.url, data)

        }
     toHomePage(resData){
   
    window.sessionStorage.setItem( "token", resData.token)
    window.sessionStorage.setItem( "userId", resData.userId)
     this.router.navigate([this.returnUrl])   
  } 
        }
  
 
  
  
//   register(user: User){
   
    
//     return this.http.post(
//       this.url, 
//       this.user
//       {
//         this.firstName = firstName,
//         this.email = email,
//         this.lastName = lastName,
//         this.password = password,

//       })
//   }

// login(){
//     return this.http.post( this.url, { email: email.value ,password: password.value })
    
//   }
 
  // .subscribe(resp => {
  //           this.user = {
  //               username: resp['username'],
  //               email: resp['email'],
  //               password: resp['password']
  //           };
  //           console.log(this.user);
  
  // toHomePage(resData){
  //   //Save data from our succesfull login in sessionStorage
  //   window.sessionStorage.setItem( "token", resData.token)
  //   window.sessionStorage.setItem( "userId", resData.userId)
  //   this.router.navigate([this.returnUrl])   
  // }
  
  // onSubmit() {
  //     this.user.firstName = this.userRegistration.controls["firstName"].value
  //     this.user.lastName = this.userRegistration.controls["lastName"].value
  //     this.user.email = this.userRegistration.controls["email"].value
  //     this.user.password = this.userRegistration.controls["password"].value

  //   }
  // onRegister() {
  //   console.log()
  //   this._user.register(this.userRegistration.value)
  //       .subscribe(res => {
  //           this._user.toHomePage(this.resData)
  //           {
  //               sessionStorage.setItem('token', res["token"])
  //               sessionStorage.setItem('userId', res["userId"])
  //           }
  //       })
  // }
  
}
