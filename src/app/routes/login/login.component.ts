import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { LoginParams } from './login-params';
import { AuthService } from '../../core/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  params: LoginParams;

  loading: boolean;

  ngOnInit() {
    this.params = new LoginParams('1', '2', '3');
    this.params.verrifyImgUrl = this.authService.getVerrifyImgUrl();
    this.params.verrifyCode
  }

  changeVerrifyImg() {
    this.params.verrifyImgUrl = this.authService.getVerrifyImgUrl();
  }

  constructor(private authService: AuthService, private router: Router) {
  }

  login() {
    if (this.authService.checkIn(this.params)) {
      this.loading = true;
      this.authService.login().subscribe(() => {
        if (this.authService.isLoggedIn) {
          let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'accountmanage/baseinfo';
          this.router.navigate([redirect]);
          this.loading = false;
        }
      });
    }
  }

  logout() {
    this.authService.logout();
  }
}
