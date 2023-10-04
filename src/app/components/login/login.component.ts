import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';
import { userType } from '../../types/user.type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public userEmail: string = '';
  public userPassword: string = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) {

  }

  onSubmit() {
    const inputUser = {
      email: this.userEmail,
      password: this.userPassword,
    };
    console.log('inputUser', inputUser);
    this.userService.getUser(inputUser).subscribe((response: any) => {
      console.log('response getUser', response);
      sessionStorage.setItem('userEmail', response[0].email);
      this.router.navigate(['portal']);
    });
  }

}
