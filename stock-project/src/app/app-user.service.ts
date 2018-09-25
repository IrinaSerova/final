import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class User {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
 
}

export class AppUserService {
  url: string = "http://mean-stack-charlie-2018-irina-phortonssf.c9users.io:8080/api/appUsers";
  returnUrl: string = "home";
  
  constructor( private http : HttpClient, private router : Router) { }
  
   register(user){
    return this.http.post(this.url, this.user)
  }

 login(){
    return this.http.post( this.url, { email: "test@gmail.com",password: "1234" })
  }
  
   toHomePage(resData){
    //Save data from our succesfull login in sessionStorage
    window.sessionStorage.setItem( "token", resData.token)
    window.sessionStorage.setItem( "userId", resData.userId)
    this.router.navigate([this.returnUrl])   
  }
}
