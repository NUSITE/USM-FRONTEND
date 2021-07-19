import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-usm-login',
  templateUrl: './usm-login.component.html',
  styleUrls: ['./usm-login.component.scss']
})
export class UsmLoginComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  userEmail: any;
  userPassword: any;


  ngOnInit(): void {
  }

  createAccount() {
    // localStorage.setItem("token", "-1");
    this.router.navigate(["/register"])
  }

  login() {
    console.log("Login", this.userEmail, this.userPassword);
    this.http.post("https://usm-backend-assignment.herokuapp.com/login", {
      userEmail: this.userEmail, userPassword: this.userPassword
    }).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error)
    })
  }



}
