import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'usm-angular';

  constructor(private router: Router) {

  }
  ngOnInit(): void {
    if (localStorage.getItem("token") == "-1") {
      localStorage.removeItem("token");
    }
    if (!localStorage.getItem("token")) {
      this.router.navigate(['/login']);
    }
     else {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnDestroy() {

  }



}
