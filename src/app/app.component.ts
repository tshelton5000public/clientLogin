import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <div class="centeredView">
      <div class="form">
        <h2 class="formTitle">Schnell-Schnell Login</h2>
        <div class="input">
          <span>Username: </span><input type="email" [formControl]="username" />
          <div *ngIf="username.invalid && (username.dirty || username.touched)">
            <span>Username must be in the form of an email address.</span>
          </div>
        </div>
        <div class="input">
          <span>Password:</span> <input type="text" [formControl]="password" />
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username: FormControl;
  password: FormControl;

  constructor() {
    this.username = new FormControl('', Validators.email);
    this.password = new FormControl('');
  }

  ngOnChanges() {
    console.log('username', this.username);
    console.log('password', this.password);
  }
}
