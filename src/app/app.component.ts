import { HttpClient } from '@angular/common/http';
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
          <span>Password:</span>
          <input type="password" [formControl]="password" />
        </div>
        <span class="buttonSpan">
          <button class="button" (click)="submit()">Submit</button></span
        >
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username: FormControl;
  password: FormControl;

  constructor(private http: HttpClient) {
    this.username = new FormControl('', Validators.email);
    this.password = new FormControl('');
  }

  async submit(): Promise<void> {
    const body = {
      username: this.username,
      password: this.password,
      token: 1234,
    };

    const response = await this.http
      .post('http://localhost:3030/login', body)
      .subscribe();

    console.log('response', response);
  }
}
