import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  public firstName: string = '';
  public userEmail: string = '';
  public userPassword: string = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) {

  }

  public onSubmit() {
    const currentUser = {
      firstName: this.firstName,
      email: this.userEmail,
      password: this.userPassword,
    };
    console.log('currentUser', currentUser);
    this.userService.registerUser(currentUser).subscribe(response => {
      console.log('response', response);
      this.router.navigate(['portal']);
    });
  }

}
