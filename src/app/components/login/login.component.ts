import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

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
    this.userService.getUser(inputUser).subscribe(response => {
      console.log('response getUser', response);
      this.router.navigate(['portal']);
    });
  }

}
