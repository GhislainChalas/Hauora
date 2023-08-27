import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  @Output() displaySignUpvent = new EventEmitter<Boolean>();

  displaySignUp(): void {
    this.displaySignUpvent.emit(true);
  }
}
