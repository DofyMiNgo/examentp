import { Component, OnInit,NgModule } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string='';
  usernameError: string = '';
  passwordError: string = '';
  usernamecase="form-control"
  passwordcase="form-control"
  
  constructor(private router:Router) { 
    
  }
  navigateToDestinationPage() {
    const dataToSend = this.username;
    this.router.navigate(['/home'], { state: { data: dataToSend } });
    this.router.navigate(['/logout'], { state: { data: dataToSend } });
  }
  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.usernameError = '';
    this.passwordError = '';

    if (!this.validateUsername()) {
      this.usernamecase="form-control is-invalid"
      this.usernameError = 'Invalid email address or username must be at least 6 characters long.';
    }

    if (!this.validatePassword()) {
      this.passwordcase="form-control is-invalid"
      this.passwordError = 'Password must be at least 6 characters long.';
    }
    if (this.validateUsername() && this.validatePassword()) {
      this.router.navigate(['/home']);
    } else {
      console.log('Invalid input')
    }
  }
  validateUsername(): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(this.username) || this.username.length < 6) {
      return false;
    }
    this.usernamecase="form-control"
    return true;
  }

  validatePassword(): boolean {
    if (this.password.length < 5) {
      return false;
    }
    this.passwordcase="form-control"
    return true;
  }
}