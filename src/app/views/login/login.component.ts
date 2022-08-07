import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {
  }
  ngOnInit(): void {
    this.loginService.doRedirect();
  }
}

// export class LoginComponent {}
