import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // user = {
  //   email = "",
  //   password:""
  // }
    constructor( public router : Router) { }

  ngOnInit() {
  }
}
  

  

