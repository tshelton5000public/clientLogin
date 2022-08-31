import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    Favorite Color: <input type="text" [formControl]="favoriteColorControl" />
  `,
})
export class AppComponent {
  favoriteColorControl = new FormControl(' ');
}
